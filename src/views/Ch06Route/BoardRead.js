import { Link, useHistory } from "react-router-dom";
import {deleteBoard, getBoard} from './data'; // 모듈 
import qs from 'qs';

function BoardRead(props){
    console.log(props); 

    const params = props.match.params; // pathvariable 값 뽑아오기 
    const bno = parseInt(params.bno); // 형변환 잊지말기 

    const board = getBoard(bno);      //bno에 맞는 보드 객체 가지고 오기

    const queryString = qs.parse(props.location.search, {ignoreQueryPrefix:true});    //쿼리스트링 값 가져오기
    const pageNo = parseInt(queryString.pageNo);

    const history = useHistory();   //props.history도 가능

    const handleRemove = (event) => {
      deleteBoard(bno);
      // history.push("/ch06?pageNo=" + pageNo); //url 변경
      history.goBack();   //삭제 한 후 뒤로가기(이전 게시판 목록)
    };

    return(
      <div className="card">
      <div className="card-header">
        BoardRead
      </div>
      <div className="card-body">
        <div>
          <p>bno: {board.bno}</p>
          <p>btitle: {board.btitle}</p>
          <p>bcontent: {board.bcontent}</p>
          <p>bwriter: {board.bwriter}</p>
          <p>bdate: {board.bdate}</p>
          <p>bhitcount: {board.bhitcount}</p>
        </div>
        <div>
          <Link to={"/ch06?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">목록</Link>
          <Link to={`/ch06/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">수정</Link>
          <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
        </div>
      </div>
    </div>
    );
}

export default BoardRead;