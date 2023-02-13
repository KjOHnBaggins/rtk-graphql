import "./App.css";
import styled from "styled-components";
import { HomePage } from "./app/containers/HomePage";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppContainer className="App">
      The setting sun the rising sun
      <HomePage />
    </AppContainer>
  );
}

export default App;
