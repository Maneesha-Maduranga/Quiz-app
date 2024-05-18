import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import { Card } from './components/ui/card';
import Main from './Layout/Main';

const initailState = {
  questions: [],
  state: 'loading',
};

function quizReducer(state, action) {
  switch (action.type) {
    case 'getData': {
      return {
        ...state,
        questions: action.quiz,
      };
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(quizReducer, initailState);

  useEffect(function () {
    async function getQuestion() {
      const res = await fetch('http://localhost:8000/questions');
      const data = await res.json();

      dispatch({
        type: 'getData',
        quiz: data,
      });
    }
    getQuestion();
  }, []);

  return (
    <div className='flex flex-col justify-items-center'>
      <Header />
      <Main>
        <Card></Card>
      </Main>
    </div>
  );
}

export default App;
