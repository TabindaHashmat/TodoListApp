import type { NextPage } from 'next';
import TodoList from './TodoList';

const Home: NextPage = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default Home;
