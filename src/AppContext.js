import React, { useState } from "react";

const AppContext = React.createContext({    //프로바이더가 제공되지 않을 때 기본으로 제공할 기본 데이터 및 기능
  uid: "",                                  //데이터가 변경되더라도 통보 기능이 없기때문에 상태 변경X 
  setUid: () => {},
  authToken: "",
  setAuthToken: () => {},
});

//하위 컴포넌트에게 데이터 및 기능을 제공하는 provider 선언
//데이터가 변경되면 하위 컴포넌트에게 통보해서 리렌더링하여 상태를 변경시켜줌
export function AppContextProvider(props) {   //데이터가 변경되었다는 것을 통보해주기 위한 컴포넌트(프로바이더)
  const [uid, setUid] = useState("");           //변경될 상태와 setter
  const [authToken, setAuthToken] = useState("");
  const value = {     //위의 context와 동일한 구조
    uid,
    setUid,
    authToken,
    setAuthToken,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
    );
}

export default AppContext;
