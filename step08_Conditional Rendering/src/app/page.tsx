import And from "@/components/And";
import Ifelse from "@/components/ifelse";
import Or from "@/components/Or";
import Ternary from "@/components/Ternary";



export default function Home() {
  // let name = "AbdulRehman";
  let name = "Husnain";

  let obj = [
    { isPacked: true, name: "Space suit" },
    { isPacked: true, name: "Helmet with a golden leaf" },
    { isPacked: false, name: "Photo of Tam" },
  ];

  return (
    <main>
      <h1>Conditional Randering</h1>
      {/* <Ifelse name={name} />; */}
      {/* <Ternary name={name} /> */}
      {/* <And data={obj} /> */}
      <Or data={obj} />
    </main>
  );
}

// <Our />
