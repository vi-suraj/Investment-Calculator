export default function UserInput({onSelectedInput,inputValue}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required value={inputValue.initialInvestment} onChange={(e) => onSelectedInput("initialInvestment", e.target.value)} />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required value={inputValue.annualInvestment} onChange={(e) => onSelectedInput("annualInvestment", e.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required value={inputValue.expectedReturn} onChange={(e) => onSelectedInput("expectedReturn", e.target.value)} />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={inputValue.duration} onChange={(e) => onSelectedInput("duration", e.target.value)} />
        </p>
      </div>
    </div>
  );
}
