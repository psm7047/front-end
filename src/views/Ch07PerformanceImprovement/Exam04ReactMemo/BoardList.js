import { useCallback, useMemo, useState } from "react";
import BoardListItem from "./BoardListItem";
function getBoards() {
  const boards = [];
  for(var i =5; i>=1 ; i--) {
    boards.push({bno:i, btitle:"제목"+ i});
  }
  return boards;
}

function BoardList(props) {

  const [btitle, setBtitle] = useState("");
  const [boards, setBoards] = useState(getBoards);
  const [bno, setBno] = useState(6);

  // const getLength = () => {
  //   console.log("getLength() 실행");
  //   return boards.length;
  // };

  const getLength = useMemo(() => {
    console.log("getLength() 실행");
    return boards.length;
  }, [boards]);

  const handleBtitleChange = useCallback((event) => {
    setBtitle(event.target.value);
  },[]);

  const addBoard = useCallback((argBno, argBtitle) => {   //이벤트 처리 함수에서 상태를 매개변수로 전해주어서 마운트 될 때 한 번만 선언됨
    const newBoard = { bno: argBno, btitle: argBtitle};
    setBoards(prevBoards => {
     const newBoards = prevBoards.concat(newBoard);
     newBoards.sort((a, b) => {return b.bno - a.bno});
     return newBoards;
    });
    setBno(prevBno => prevBno + 1);
    setBtitle("");
  },[]);

  const changeBoard = useCallback((bno) => {
    setBoards(prevBoards => {
      const newBoards = prevBoards.map(board => {
        if(board.bno === bno) {
          const newBoard = {...board, btitle: board.btitle+ "(변경)"};
          return newBoard;
        } else {
          return board;
        }
      });
      return newBoards;
    });
  },[]);

  const removeBoard = useCallback((bno) => {
   
    setBoards(prevBoards => {
      const newBoards = prevBoards.filter(board => board.bno !== bno);
      return newBoards;
    });
  },[]);

  return (
    <div className="card">
      <div className="card-header">BoardList</div>
      <div className="card-body">
        <div>
          <span className="mr-2">게시물 수:</span>
          {/* <span className="text-danger">{getLength()}</span> */}
          <span className="text-danger">{getLength}</span>
          <div className="d-flex align-items-center mt-2 mb-3">
            <span className="mr-2">제목:</span>
            <input type="text" value={btitle} onChange={handleBtitleChange} />
            <button className="btn btn-info btn-sm ml-3" onClick={() => addBoard(bno, btitle)}>
              추가
            </button>
          </div>
        </div>
        <div className="d-flex bg-info">
          <span className="border" style={{ width: "80px" }}>
            번호
          </span>
          <span className="border flex-fill">제목</span>
        </div>
        {boards.map(board => {
          return (
            <BoardListItem key={board.bno} board={board} changeBoard={changeBoard} removeBoard={removeBoard}/>
          );
        })}
      </div>
    </div>
  );
}

export default BoardList;
