import React from "react";

export default function App(): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column"
      }}
    >
      <div style={{fontSize:"32pt",fontWeight:"bold",color:"#333333"}}>Hello !</div>
      <div style={{fontSize:"18pt",fontWeight:"lighter",color:"#333333"}}>From React</div>
    </div>
  );
}
