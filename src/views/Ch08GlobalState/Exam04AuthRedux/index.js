import LoginFormFun from "./LoginFormFun";
import LoginFormClass from "./LoginFromClass";

function Exam04AuthRedux(props) {
    return(
        <div className="card">
              <div className="card-header">
              Exam04AuthRedux
              </div>
              <div className="card-body">
                  <LoginFormClass/>
                  <LoginFormFun/>
              </div>
        </div>
    );
}

export default Exam04AuthRedux;