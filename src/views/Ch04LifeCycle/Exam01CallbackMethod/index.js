import { useState } from "react";
import ClassType from "./ClassType";

function Exam01CallBackMethod(props) {

  const [startNum, setStartNum] = useState(0);
  const handleChange = (event) => {
    setStartNum(parseInt(event.target.value));
  }
  return (
    <div className="card">
        <div className="card-header">
          Exam01CallBackMethod
        </div>
        <div className="card-body">
          <input type="number" name="startNum" value={startNum} onChange={handleChange}/>
          <div className="m-2"/>
          <ClassType startNum={startNum}/>
        </div>
      </div>
  );
}

export default Exam01CallBackMethod;