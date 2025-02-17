import { Routes, Route, BrowserRouter } from "react-router-dom";
import FrontPage from "./components/frontPage/FrontPage";
import QuizApp from "./components/quizApp/QuizApp";
import Instructions from "./components/instructions/Instructions";
import { Provider } from "react-redux";
import { store } from "./services/store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/quiz" element={<QuizApp />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
