import { useContext, createContext, useReducer, useEffect } from 'react';

const QuizContext = createContext();

const initailState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  count: 1,
  score: 0,
};

function quizReducer(state, action) {
  switch (action.type) {
    case 'get_data': {
      return {
        ...state,
        questions: action.quiz,
        status: 'start',
      };
    }
    case 'start_quiz': {
      return {
        ...state,
        status: 'active',
      };
    }
    case 'next_question': {
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        count: state.count + 1,
      };
    }
    case 'selected_answer': {
      let question = state.questions[state.index];

      return {
        ...state,
        answer: action.answer,
        score:
          question.correctOption === action.answer
            ? state.score + 10
            : state.score,
      };
    }
    case 'finish_game': {
      return {
        ...state,
        status: 'finish',
      };
    }
    case 'play_again': {
      return {
        ...initailState,
        questions: state.questions,
        status: 'start',
      };
    }
  }
}

function QuizProvider({ children }) {
  const [{ questions, status, index, answer, count, score }, dispatch] =
    useReducer(quizReducer, initailState);

  useEffect(function () {
    async function getQuestion() {
      try {
        const res = await fetch('http://localhost:8000/questions');
        const data = await res.json();

        dispatch({
          type: 'get_data',
          quiz: data,
        });
      } catch (error) {
        console.error(error);
      }
    }
    getQuestion();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        count,
        score,

        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) throw new Error('Context is outside the provider');

  return context;
}

export { QuizProvider, useQuiz };
