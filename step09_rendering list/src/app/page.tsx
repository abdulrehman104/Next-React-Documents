import Image from "next/image";

export default function Home() {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];

  return (
    <>
      <div>
        <ul>
          {people.map((data) => (
            <li className="flex items-center py-2">
              <Image
                src="/user.png"
                alt={data.name}
                width={150}
                height={150}
                key={data.id}
              />
              <p>
                {data.name}: <strong>{" " + data.profession + " "}</strong>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
