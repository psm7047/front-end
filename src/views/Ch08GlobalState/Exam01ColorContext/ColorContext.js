import React, { useState } from "react";

const ColorContext = React.createContext({  //프로바이더가 제공되지 않았을 때 기본으로 제공할 기본값
    color: "yellow",
    setColor: function(color) {this.color = color}  //함수라는 것만 명시해주면 됨
});

export function ColorContextProvider(props) {
    const [color, setColor] = useState("yellow");
    const value = {
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