import React from "react";
import { connect } from "react-redux";
import { createSetAuthTokenAction, createSetUidAction } from "redux/auth-reducer";

//부모 컴포넌트에서 props로 속성을 자식 컴포넌트에게 전달(store)
class LoginFormClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: ""
        };
    }

    handleChange = (event) => {
        this.setState({uid: event.target.value});
    };
    //클래스형 컴포넌트는 전역 상태 및 액션을 리듀서로 보내는 함수를 props로 전달
    login = (event) => {
        this.props.setUid(this.state.uid);
    };

    logout = (event) => {
        this.props.setUid("");
    };

    render() {
        return (
            <div className="card">
                  <div className="card-header">
                  LoginFormClass
                  </div>
                  <div className="card-body">
                    <div className="form-group row">
                        <label htmlFor="uid" className="col-sm-2 col-form-label">User ID</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" name="uid" value={this.state.uid} onChange={this.handleChange}/>
                        </div>
                    </div>
                    {this.props.uid === "" ? (
                        <button className="btn btn-success btn-sm" onClick={this.login}>로그인</button>
                    ) : ( 
                        <button className="btn btn-success btn-sm" onClick={this.logout}>로그아웃</button>
                    )}
                  </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    uid: state.authReducer.uid
}); 

const mapDispatchToProps = (dispatch) => {
    return {
        setUid: (uid) => dispatch(createSetUidAction(uid))
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormClass);