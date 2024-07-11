import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  return (
    <div className={styles.Calculator}>
     <Display></Display>
     <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
