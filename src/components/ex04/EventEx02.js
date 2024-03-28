import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.color};
`;

export const EventEx02 = () => {
  const [bgColor, setBgColor] = useState("gold");

  const onClickBox = () => {
    setBgColor("salmon");
  };

  return (
    <>
      <h1
        style={{
          fontSize: "30px",
          marginBottom: "30px",
        }}
      >
        클릭하면 배경색이 변경됩니다!
      </h1>
      <Box color={bgColor} onClick={onClickBox}></Box>
    </>
  );
};
