const ChildComp = ({ sendDataToParent }: any) => {
  const handleClick = () => {
    // Simulated data from child
    const data = "Hello from Child";

    // Call the callback function with the data
    sendDataToParent(data);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick} className=" border-2 border-gray-400 rounded hover:bg-slate-600">Send Data to Parent</button>
    </div>
  );
};

export default ChildComp;
