import { deleteBoard, readBoard } from "apis/boards";
import qs from "qs";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function BoardRead(props) {
  const bno = parseInt(props.match.params.bno);   //pathVariable
  const queryString = qs.parse(props.location.search,{ignoreQueryPrefix: true});
  const pageNo = parseInt(queryString.pageNo);

  //비동기 통신을 위한 상태
  const [board, setBoard] = useState({});

  //async 달지 못함 마운트 되면 board의 내용을 가져오기(라이프사이클 참조)
  //이벤트 함수가 아닌 처음에 뿌려주어야 하는 정보들
  useEffect(() => {
    //비동기 통신
    const work = async () => {
      try {
        const response = await readBoard(bno);
        setBoard(response.data);
      } catch (error) {
        console.log(error.message);
        //history.push("./error"); 에러 컴포넌트로 이동
      }
    };
    work();
  },[bno]); //마운트, bno가 바뀔때만 실행

  const history = useHistory();

  const handleRemove = async(event) => {
    try {
      await deleteBoard(bno);
      history.goBack();   //props.history.goBack
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
        <div className="card">
      <div className="card-header">
        BoardRead
      </div>
      <div className="card-body">
        {board &&
          <>
            <div>
              <p>bno: {board.bno}</p>
              <p>btitle: {board.btitle}</p>
              <p>bcontent: {board.bcontent}</p>
              <p>bwriter: {board.bwriter}</p>
              <p>bdate: {new Date(board.bdate).toLocaleDateString()}</p>
              <p>bhitcount: {board.bhitcount}</p>
              <p>battachoname: {board.battachoname}</p>
              <p>battachsname: {board.battachsname}</p>
              <p>battachtype: {board.battachtype}</p>
            </div>
            <div>
              <Link to={"/ch09/exam03?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">목록</Link>
              <Link to={`/ch09/exam03/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">수정</Link>
              <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default BoardRead;