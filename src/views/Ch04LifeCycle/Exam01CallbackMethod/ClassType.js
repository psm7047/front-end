import React from "react";

class ClassType extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startNum: 0,
      number: 0
    };
    console.log("constructor 실행");
  }

  static getDerivedStateFromProps(Newprops, prevState) {
    console.log("getDe~~~ 상태값 갱신");
    //props가 갱신될 때 상태값도 같이 갱신되도록 새로운 상태 리턴
    if(prevState.startNum !== Newprops.startNum) {
      return {
        startNum: Newprops.startNum,
        number: Newprops.startNum
      }
    }else {
      //상태를 그대로 유지하겠다는 뜻
      return null;
    }
    
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.group("shouldComponentUpdate 실행");
    console.log(nextProps);
    console.log(nextState);
    console.groupEnd();
    if(nextState.number % 2 === 0) {
      return true;
    }else {
      return false;
    }
  }

  render() {
    console.log("렌더실행~~~");
    return (
      <div className="card">
        <div className="card-header">
          ClassType
        </div>
        <div className="card-body">
            number: {this.state.number}
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate() 실행");
  }

  componentDidMount() {
    console.log("컴포넌트디드마운트~~");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount() 실행");
  }
}

export default ClassType;
