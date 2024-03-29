/// -------->  Interface to define what props Child expects to receive

interface ChildProps {
  color: string;
  onClick: () => void;
  //   children?: React.ReactNode;
}

// This is like --->  Child is function that receives argument of type ChildProps
// Downside is that TS doesn't understand that we are defining a React component, instead it thinks it as a function

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

// Child.displayName;  Can't access it.

// --- Another way of defining a functional component with typescript.
//---- 1. 'ChildAsFC' will be a react functional component.
//---- 2. 'ChildAsFC' might have properties assigned to it like 'propTypes' and 'contextTypes'
//---- 3. 'ChildAsFC' will receive props of type 'ChildProps'
//---- 4. ChildAsFC that is annotated using React.FC expects to receive a children prop.

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

// ChildAsFC.displayName;
