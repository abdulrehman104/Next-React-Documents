# Props

In React, props (short for properties) serve as a means of communication between parent and child components. They enable the passing of specific information, such as numbers, text, or functions, from one component to another within the application.

## How to Utilize Props:

Suppose you have a parent component and you wish to pass a name and age to its child component. In such cases, you can transmit data like name and age to the child via props.

```tsx
// Parent Component:

import ChildComponent from "@/components/ChildComponent";

export default function Home() {
  return (
    <>
      <main className="flex flex-col ">
        <h1 className="text-5xl">Props</h1>
        <ChildComponent name="AbdulRehman" age="19" />
      </main>
    </>
  );
}

---------------------------------------------------------------------------

// Child Component:

const ChildComponent = (props: any) => {
  return (
    <div className="flex flex-col gap-y-3 mt-3">
      <h1 className="text-3xl">My name is {props.name}</h1>
      <p className="text-xl">My Age is {props.age}</p>
    </div>
  );
};

export default ChildComponent;
```

![alt text](image.png)

## Benefits of Props:

- Facilitates one-way data flow.
- Enhances component reusability.
- Promotes modularity and code organization.
- Simplifies code maintenance and debugging.
- Enables dynamic UI rendering based on changing data.
- Simplifies unit testing of components.
- Supports performance optimization by minimizing stateful components.

[More About Props](https://medium.com/@abdulrehman104/props-in-react-facilitating-component-communication-e5365f14da86)
