import { useQuiz } from '@/context/QuizContext';
//component
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
//Images
import firworkImages from '../assets/fireworks.png';

function ResultScreen() {
  const { score, dispatch } = useQuiz();
  return (
    <Card>
      <CardHeader className='pb-4'>
        <CardTitle className='text-2xl '>
          You scored {score} out of 100
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex justify-center items-center'>
          <img src={firworkImages} className='size-80' />
        </div>
      </CardContent>
      <CardFooter className='flex justify-center items-center'>
        <Button
          onClick={() => {
            dispatch({
              type: 'play_again',
            });
          }}
        >
          Play Again
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ResultScreen;
