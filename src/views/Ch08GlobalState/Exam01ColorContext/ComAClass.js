import React from "react";
import ColorContext from "./ColorContext";
import ComBFun from "./ComBFun";

class ComAClass extends React.Component {
    //정적 속성 하나의 컨텍스트만 사용 가능
    static contextType = ColorContext;

    //생성자
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = (event) => {         //provider가 있을 경우에만 상태가 변경됨
        this.context.setColor("red");
    }

    //인스턴스 메소드
    render() {
        return (
            <div className="card">
                  <div className="card-header">
                    ComAClass
                  </div>
                  <div className="card-body">
                  <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>색깔 변경</button>
                      <div style={{backgroundColor: this.context.color}}>   {/*provider가 상태가 바뀌었음을 통보하면 컴포넌트 리렌더링 됨 */}
                          내용
                      </div>
                      <ComBFun/>
                  </div>
                </div>
        );
    }
}

export default ComAClass;