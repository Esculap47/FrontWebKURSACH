import Header from "./header/Header";
import { Route, Routes } from 'react-router-dom'
import Quiz from './quiz/Quiz';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQuizes } from './store/quizAction';
function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getQuizes())
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/quizes" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
