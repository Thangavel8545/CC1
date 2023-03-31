import React from "react";

function Day5() {
  const [numbers, setNumbers] = React.useState([]);
  const [total, setSum] = React.useState();
  const [error, setError] = React.useState();

  const addSum = () => {
    try {
      setSum(numbers.reduce((sum, current) => sum + current));
      setError(null);
    } 
    catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNumbers(e.target.value.split(" ").map(Number))}
        placeholder="Enter comma separated numbers"
      />
      <button onClick={addSum}>Calculate Sum</button>
      
      {total && <div>The sum of the array is {total}</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default Day5;