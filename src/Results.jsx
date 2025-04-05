import { calculateInvestmentResults, formatter } from "./util/investment";

export default function Results({ input }) {
  const resutData = calculateInvestmentResults(input);

  const initialInvestment = resutData[0].valueEndOfYear - resutData[0].interest - resutData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year </th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resutData.map((result) => {
          const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;

          const investmentCaptial = result.valueEndOfYear - totalInterest;

          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investmentCaptial)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
