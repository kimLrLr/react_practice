import styled from "styled-components";

const ConWrap = styled.div`
  width: 400px;
  border: 5px solid black;
  margin: 100px auto;
`;

const Bg = styled.img`
  width: 100%;
`;

const TitleWrap = styled.div`
  padding: 25px;
`;

const Title = styled.h3`
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  line-height: 22px;
`;

export const TCStyle = () => {
  return (
    <ConWrap>
      <Bg src="http://cdn.pixabay.com/photo/2022/10/16/13/17/road-7525092_1280.jpg"></Bg>
      <TitleWrap>
        <Title>Title</Title>
        <Desc>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          architecto eos, beatae maiores consectetur voluptate maxime iure sint
          omnis excepturi, labore repellat quae voluptatibus reiciendis
          veritatis officia error? Qui, quae?
        </Desc>
      </TitleWrap>
    </ConWrap>
  );
};
