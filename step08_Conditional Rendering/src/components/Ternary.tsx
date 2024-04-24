const Ternary = ({ name }: any) => {
  return (
    <div>
      {name === "Husnain" ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign up or log in.</h1>
      )}
    </div>
  );
};

export default Ternary;
