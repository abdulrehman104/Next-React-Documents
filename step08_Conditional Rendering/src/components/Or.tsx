export default function Or({ data }: any) {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <div>
        {data.map((item: any, index: any) => (
          <p key={index}>
            {item.name} {item.isPacked && "✔" || "❌"}
          </p>
        ))}
      </div>
    </section>
  );
}
