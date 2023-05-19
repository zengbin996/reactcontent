import { useContext } from "react";
import { Counter } from "./Parent";

export default function () {
  const counter = useContext(Counter);
  return (
    <div style={{ background: "#1ff" }}>
      <div>孙组件</div>
      <div>性别: {counter.sex}</div>
      <div>年龄: {counter.age}</div>
    </div>
  );
}
