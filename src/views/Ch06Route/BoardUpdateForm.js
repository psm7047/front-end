import { useState } from "react";
import { getBoard, updateBoard } from "./data";

function BoardUpdateForm(props) {

    const bno = parseInt(props.match.params.bno);
    const [board, setBoard] = useState(() => {return getBoard(bno);}); //함수 호출이 아닌 함수를 제공(bno를 넘겨주어야하므로 화살표 함수 사용)

    const handleUpdate = (event) => {
        event.preventDefault();   //폼 기본 섭밋기능 해제
        // const updatedeBoard = {...board};
        // updateBoard(updatedeBoard);   //상태가 변한 board 넘겨줌
        updateBoard(board);   //상태가 변한 board 넘겨줌
        props.history.goBack(); //뒤로가기(상세페이지)
    };

    const handleCancel = (event) => {
        props.history.goBack();   //뒤로가기(이전 게시판 목록)
    };

    const handleChange = (event) => {
      //폼 양식의 상태가 바뀔 때 board 상태 변경, 화면에 반영시켜쥼
        setBoard({
            ...board,
            [event.target.name]: event.target.value
        });
    }

    return(
        <div className="card">
        <div className="card-header">
          Component: BoardUpdateForm
        </div>
        <div className="card-body">
          <form onSubmit={handleUpdate}>
            <div className="form-group row">
              <label htmlFor="btitle" className="col-sm-2 col-form-label">btitle</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="btitle" name="btitle" value={board.btitle} onChange={handleChange}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="bcontent" className="col-sm-2 col-form-label">bcontent</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="bcontent" name="bcontent" value={board.bcontent} onChange={handleChange}/>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-12 d-flex justify-content-center">
                <input type="submit" className="btn btn-primary btn-sm mr-2" value="수정"/>
                <input type="button" className="btn btn-primary btn-sm" value="취소" onClick={handleCancel}/>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default BoardUpdateForm;