import { useContext } from "react";
import { Counter } from "./Parent";
import Son from "./Son";

export default function () {
  const counter = useContext(Counter);
  return (
    <div style={{ background: "#2da" }}>
      <div>子组件</div>
      <div>性别: {counter.sex}</div>
      <div>年龄: {counter.age}</div>

      <Son />
    </div>
  );
}
