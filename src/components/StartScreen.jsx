import { useQuiz } from '@/context/QuizContext';
//compenets
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
//Images
import quizImages from '../assets/quiz.png';

function StartScreen() {
  const { dispatch } = useQuiz();

  return (
    <Card>
      <CardHeader className='pb-4'>
        <CardTitle className='text-2xl '>
          Welcome to the Awesome Quiz Application
        </CardTitle>
        <CardDescription className='text-xl'>
          Test your knowledge and improve your skills.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex justify-center items-center'>
          <img src={quizImages} className='size-60' />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className='w-full'
          onClick={() => {
            dispatch({
              type: 'start_quiz',
            });
          }}
        >
          Start Playing🎮
        </Button>
      </CardFooter>
    </Card>
  );
}

export default StartScreen;
