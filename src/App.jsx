import { useState } from "react";

import Results from "./Results";
import UserInput from "./UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValideInput = userInput.duration >= 1;

  function handleUserInput(indentifier, value) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [indentifier]: +value };
    });
  }

  return (
    <div>
      <main>
        <UserInput inputValue={userInput} onSelectedInput={handleUserInput} />
        {!isValideInput && <p className="center">Please enter duration greater than zero</p>}
        {isValideInput && <Results input={userInput} />}
      </main>
    </div>
  );
}

export default App;

