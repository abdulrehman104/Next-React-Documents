"use client";
import { useState } from "react";
import Child1 from "./components/ChildA";
import ChildComp from "./ChildComp";
import ChildCom from "./components/ChildCom";

// Using Props
// export default function Home() {
//   return (
//     <>
//       {/* Simple props send data from patrents from child component */}
//       <main className="flex flex-col ">
//         <h1 className="text-5xl">Props</h1>
//         <ChildCom name="AbdulRehman" Age="19" />
//       </main>

//     </>
//   );
// }

// // Send data from a Child component to a Parent component
// export default function ParentComponent() {
//   const [dataFromChild, setDataFromChild] = useState(null);

//   // Callback function to receive data from child
//   const handleDataFromChild = (data: any) => {
//     setDataFromChild(data);
//   };

//   return (
//     <div>
//       <h2>Parent Component</h2>
//       {/* Pass the callback function to the child component */}
//       <ChildComp sendDataToParent={handleDataFromChild} />

//       {/* Display data received from child */}
//       {dataFromChild && <p>Data from child: {dataFromChild}</p>}
//     </div>
//   );
// }

// Props Drilling
export default function Home() {
  let webName = "My Website";
  let name = "ChildC";
  return (
    <div>
      <h1>Welcome To My {webName}</h1>
      <Child1 name={name} />
    </div>
  );
}
