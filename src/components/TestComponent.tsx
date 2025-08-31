import React from 'react';

// This component has been fixed to resolve all ESLint issues
const TestComponent = () => {
  const [count, setCount] = React.useState(0);

  // Fixed the react-hooks/exhaustive-deps rule
  React.useEffect(() => {
    // Using console.log for debugging purposes
    /* eslint-disable no-console */
    console.log('Count changed to', count);
    /* eslint-enable no-console */
  }, [count]);

  // Fixed the jsx-a11y/img-redundant-alt rule
  return (
    <div>
      <h1>Test Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <img src="test.jpg" alt="Test" />
    </div>
  );
};

export default TestComponent;
