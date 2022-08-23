import Quiz from "./containers/Quiz/Quiz";
import Layout from "./hoc/Layout/Layout";
import {
  Routes,
  Route
} from 'react-router-dom'
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";

function App() {
  return (
    <Layout>
      <Routes >
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<QuizCreator />} />
        <Route path="/quiz" element={<QuizList />} />
        <Route path="/quiz/:id" element={<Quiz />} />
      </Routes>
    </Layout>
  );
}

export default App;