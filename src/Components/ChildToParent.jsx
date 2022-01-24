import React from "react";

const Child = ({ value, handleChange }) => {
  const handleDecrement = () => {
    handleChange(-1);
  };
  const handleIncrement = () => {
    handleChange(1);
  };
  return (
    <div>
      <h1>Count is :{value}</h1>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

function ChildToParent() {
  const [count, setCount] = React.useState(0);
  const handleChange = (value) => {
    setCount(count + value);
  };
  return (
    <div>
      <h1>Child to Parent</h1>
      <Child
        value={count}
        // handleDecrement={() => handleChange(-1)}
        // handleIncrement={() => handleChange(1)}
        handleChange={handleChange}
      />
    </div>
  );
}

export { ChildToParent };
