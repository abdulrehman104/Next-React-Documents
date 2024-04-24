const ChildCom = (props: any) => {
  return (
    <>
      {/* Simple props send data from patrents from child component */}
      <div className="flex flex-col gap-y-3 mt-3">
        <h1 className="text-3xl">My name is {props.name}</h1>
        <p className="text-xl">My Age is {props.Age}</p>
      </div>
    </>
  );
};

export default ChildCom;
