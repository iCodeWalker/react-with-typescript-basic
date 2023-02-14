import React from "react";
import { Child, ChildAsFC } from "./Child";

//-------- Basically we define interface for props.To check Are we providing
//-------- correct props to child when we show it in Parent.

//-------- Are we using the correctly named + typed props in Child

const Parent = () => {
  //     return <Child color="red" onClick={()=>console.log("clicked")}>
  // i'm child
  //     </Child>

  return (
    <ChildAsFC color="red" onClick={() => console.log("clicked")}></ChildAsFC>
  );
  //--- ChildAsFC that is annotated using React.FC expects to receive a children prop.
};

export default Parent;
