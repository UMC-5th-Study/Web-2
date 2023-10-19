import styled from "styled-components";

export const MovieBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 170px;
  background-color: #54548b;
  cursor: pointer;

  & > img {
    width: 100%;
    height: auto;
  }

  &:hover > .movie-detail {
    opacity: 1;
  }
`;

export const MovieContent = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 10px;
  width: 100%;
  color: white;

  & > h1 {
    font-size: 14px;
  }

  & > span {
    font-size: 12px;
  }
`;
