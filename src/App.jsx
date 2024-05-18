import Header from './components/Header';
import { Card } from './components/ui/card';
import Main from './Layout/Main';

function App(props) {
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
