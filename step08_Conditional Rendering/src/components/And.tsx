

export default function And({ data }: any) {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ol>
        {data.map((item: any, index: any) => (
          <li key={index}>
            {item.name} {item.isPacked && "✔"}
          </li>
        ))}
      </ol>
    </section>
  );
}
