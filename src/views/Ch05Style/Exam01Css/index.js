import style from "./style.module.css";
import classnames from "classnames/bind";
import { useState } from "react";

const cx = classnames.bind(style);

function Exam01Css() {
  const [state, setState] = useState({
    userId: null,
  });
    return(
        <div className="card">
              <div className="card-header">
                Exam01Css
              </div>
              <div className="card-body">
                <div className={style.wrapper}>
                    Hello, React1!
                </div>
                <div className={style.wrapper + " " + style.inverted + " mt-3"}>
                    Hello, React2!
                </div>
                <div className={`${style.wrapper} ${style.inverted} mt-3`}>
                    Hello, React3!
                </div>
                {state.userId === null ? 
                  <div className={classnames(style.wrapper, style.inverted, "mt-3")}>
                  Hello, React4!
                  </div>
                  :
                  <div className={classnames(style.wrapper, "mt-3")}>
                      Hello, React4!
                  </div>
                }
                <div className={classnames(style.wrapper, {[style.inverted]: state.userId === null}, "mt-3")}>
                  Hello, React5!
                </div>
                <div className={cx("wrapper", {inverted: state.userId === null}, "mt-3")}>
                  Hello, React6!
                </div>
              </div>
            </div>
    );
}

export default Exam01Css;