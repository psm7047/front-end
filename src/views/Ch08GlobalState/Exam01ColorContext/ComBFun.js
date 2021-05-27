import { useContext } from "react";
import ColorContext from "./ColorContext";

function ComBFun(props) {
    //여러개의 컨텍스트 사용 가능
  const colorContext = useContext(ColorContext);

  const handleChange = (event) => {     //provider가 있을 경우에만 상태가 변경됨
    colorContext.setColor("green");
  }

  return (
    <div className="card">
      <div className="card-header">ComBFun</div>
      <div className="card-body">
        <button className="btn btn-info btn-sm mb-3" onClick={handleChange}>
          색깔 변경
        </button>
        <div style={{ backgroundColor: colorContext.color }}>내용</div> {/*provider가 상태가 바뀌었음을 통보하면 리렌더링 됨(리턴문) */}
      </div>
    </div>
  );
}

export default ComBFun;
