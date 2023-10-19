import styled from "styled-components";

export const MovieDetailBox = styled.div`
  padding: 20px 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  overflow-y: auto;
  opacity: 0;
  transition: 0.2s;

  & > h2 {
    font-size: 14px;
  }

  & > p {
    margin-top: 15px;
    font-size: 14px;
  }
`;
