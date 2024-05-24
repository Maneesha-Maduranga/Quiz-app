import { useQuiz } from '@/context/QuizContext';
//component
import { Button } from './ui/button';

function MainButton() {
  const { answer, count, dispatch } = useQuiz();

  if (answer === null) return null;

  if (count !== 10)
    return (
      <Button
        onClick={() => {
          dispatch({
            type: 'next_question',
          });
        }}
      >
        Next
      </Button>
    );

  if (count === 10)
    return (
      <Button
        onClick={() => {
          dispatch({
            type: 'finish_game',
          });
        }}
      >
        Finish
      </Button>
    );
}

export default MainButton;
