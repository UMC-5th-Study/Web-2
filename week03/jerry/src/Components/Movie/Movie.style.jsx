import styled from 'styled-components';

const Parent = styled.body`
  background-color: #22254b;
`;

const App_con = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 200px;
`;

const Movie_con = styled.div`
  margin: 16px;
  width: 250px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
`;

function App() {
  return (
    <Parent>
      <App_con />
      <Movie_con />
    </Parent>
  );
}
export default App;