import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
  background-color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  background-color: #282c34;
  color: white;
  padding: 20px;
  border: 10px outset #fff;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const APODImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  margin: 20px 0;
  border: 10px outset #000;
`;

export const Explanation = styled.p`
  font-size: 16px;
  margin: 20px 0;
  text-align: left;
  padding: 0 20px;
  color: #333;
`;
