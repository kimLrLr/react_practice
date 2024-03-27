import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  margin: 150px auto;
`;

const Box = styled.div`
  border: 3px solid #333;
  width: 300px;
  height: 300px;
`;

const MainImg = styled.div`
  background-color: violet;
  width: 100%;
  height: 60%;
`;

const TextBox = styled.div`
  padding: 20px;
`;

export const MyStyleEx = () => {
  return (
    <Wrap>
      <Box>
        <MainImg />
        <TextBox>
          <h4>title</h4>
          <h6>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            delectus nostrum quis perferendis magni! Perspiciatis porro vel
            quaerat laborum odio excepturi labore, amet numquam aperiam, vero
            molestiae, deleniti iure eligendi.
          </h6>
        </TextBox>
      </Box>
    </Wrap>
  );
};
