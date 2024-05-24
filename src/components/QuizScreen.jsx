import { useQuiz } from '@/context/QuizContext';
//component
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Options from './Options';
import MainButton from './MainButton';

function QuizScreen() {
  const {
    questions,
    index,
    answer,
    count,
    score,

    dispatch,
  } = useQuiz();

  let question = questions[index];

  return (
    <Card>
      <CardHeader className='pb-4 my-8'>
        <CardTitle className='flex justify-between text-sm'>
          <p>Question {count}/10</p>
          <p>{score}/100 points</p>
        </CardTitle>
        <CardDescription className='text-2xl my-8'>
          {question.question}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Options question={question} answer={answer} dispatch={dispatch} />
      </CardContent>
      <CardFooter className='flex flex-col items-center'>
        <MainButton dispatch={dispatch} answer={answer} count={count} />
      </CardFooter>
    </Card>
  );
}

export default QuizScreen;
