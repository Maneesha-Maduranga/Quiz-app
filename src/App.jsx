import { useQuiz } from './context/QuizContext';

//components
import Header from './components/Header';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import StartScreen from './components/StartScreen';
import Main from './Layout/Main';

function App() {
  const { status } = useQuiz();

  return (
    <div className='flex flex-col justify-around items-center text-center '>
      <Header />
      <Main>
        {status === 'start' && <StartScreen />}
        {status === 'active' && <QuizScreen />}
        {status === 'finish' && <ResultScreen />}
      </Main>
    </div>
  );
}

export default App;
