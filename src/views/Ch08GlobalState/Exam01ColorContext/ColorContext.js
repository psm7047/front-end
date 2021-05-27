import React, { useState } from "react";

const ColorContext = React.createContext({  //프로바이더가 제공되지 않았을 때 기본으로 제공할 기본 데이터 및 기능
    color: "yellow",
    setColor: function(color) {this.color = color}  //함수라는 것만 명시해주면 됨
});

export function ColorContextProvider(props) {       //데이터가 변경되었다는 것을 통보해주기 위한 컴포넌트(프로바이더)
    const [color, setColor] = useState("yellow");
    const value = {                                 //위의 context와 동일한 구조
        color: color,
        setColor: setColor
    };

    return (
        <ColorContext.Provider value={value}>
            {props.children}
        </ColorContext.Provider>
    );
};

export default ColorContext;