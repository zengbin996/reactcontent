import React, { useRef, useState } from "react";
import Child from "./Child";
export const Counter = React.createContext();

const Parent = () => {
  const [userInfo, setUserInfo] = useState({
    age: 20,
    sex: "man"
  });

  const refsA = useRef();
  const refsB = useRef();

  return (
    <Counter.Provider value={userInfo}>
      <div style={{ background: "skyblue" }}>
        <div>父组件</div>

        <button
          onClick={() => {
            setUserInfo({ ...userInfo, age: userInfo.age + 1 });
            console.log(refsA);
            console.log(refsB);
          }}
        >
          年龄+1
        </button>
        <button
          onClick={() => setUserInfo({ ...userInfo, age: userInfo.age - 1 })}
        >
          年龄-1
        </button>
      </div>
      <input ref={refsA} />
      <Child ref={refsB} />
    </Counter.Provider>
  );
};

export default Parent;
