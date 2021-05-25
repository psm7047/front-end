import { useState } from "react";
import FunType from "./FunType";

function Exam02UseEffect(props) {

  const [startNum, setStartNum] = useState(0);
  const handleChange = (event) => {
    setStartNum(parseInt(event.target.value));
  }
  return (
    <div className="card">
        <div className="card-header">
            Exam02UseEffect
        </div>
        <div className="card-body">
          <input type="number" name="startNum" value={startNum} onChange={handleChange}/>
          <div className="m-2"/>
          <FunType startNum={startNum}/>
        </div>
      </div>
  );
}

export default Exam02UseEffect;