//component
import { Button } from './ui/button';

function Options({ question, dispatch, answer }) {
  return (
    <>
      {question.options.map((ans, _ind) => (
        <Button
          className={`w-full my-4 ${
            answer === _ind
              ? question.correctOption === _ind
                ? 'bg-green-500'
                : 'bg-red-500'
              : ''
          }`}
          key={ans}
          onClick={() => {
            dispatch({
              type: 'selected_answer',
              answer: _ind,
            });
          }}
          disabled={answer !== null}
        >
          {ans}
        </Button>
      ))}
    </>
  );
}

export default Options;
