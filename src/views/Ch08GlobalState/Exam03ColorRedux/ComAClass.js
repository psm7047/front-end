import React from "react";
import { connect } from "react-redux";

import { createSetColorAction } from "redux/color-reducer";

class ComAClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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

const mapStateToProps = (state) => ({
    color: state.colorReducer.color
}); 

const mapDispatchToProps = (dispatch) => {
    return {
        setColor: (color) => dispatch(createSetColorAction(color))
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(ComAClass);