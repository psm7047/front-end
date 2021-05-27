import React from "react";
import { connect } from "react-redux";
//액션생성함수 임포트
import { createSetColorAction } from "redux/color-reducer";

class ComAClass extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.setColor("red");
    }

    render() {
        return (
            <div className="card">
                  <div className="card-header">
                  ComAClass
                  </div>
                  <div className="card-body">
                    <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>색깔 변경</button>
                        <div style={{backgroundColor: this.props.color}}>
                            내용
                        </div>
                  </div>
                </div>
        );
    }
}

//전역 상태 중 colorReducer 리듀서의 color 상태 읽기
const mapStateToProps = (state) => ({
    color: state.colorReducer.color
}); 

//dispatch를 이용하여 액션 생성 함수에 전역 상태(color)를 넣어주어 
//새로운 상태을 생성해서 리듀서로 보내줌(상태가 바뀜 리렌더링)
const mapDispatchToProps = (dispatch) => {
    return {
        setColor: (color) => dispatch(createSetColorAction(color))
    }
}; 

//store와 ComAClass를 연결해줌, store의 메소드 사용 가능
export default connect(mapStateToProps, mapDispatchToProps)(ComAClass);