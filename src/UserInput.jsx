import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleUserInput(indentifier, value) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [indentifier]: value };
    });
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required value={userInput.initialInvestment} onChange={(e) => handleUserInput("initialInvestment", e.targetvalue)} />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required value={userInput.annualInvestment} onChange={(e) => handleUserInput("annualInvestment", e.targetvalue)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required value={userInput.expectedReturn} onChange={(e) => handleUserInput("expectedReturn", e.targetvalue)} />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={userInput.duration} onChange={(e) => handleUserInput("duration", e.targetvalue)} />
        </p>
      </div>
    </div>
  );
}
