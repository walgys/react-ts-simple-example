import { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import Task from './interfaces/task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
interface Props {
  title: string;
}

function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Learn React',
      description: 'A React App',
      completed: false,
    },
  ]);

  return (
    <div className="bg-dark text-white" style={{ height: '100vh' }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="React logo" style={{ width: '4rem' }} />
            {title}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="col-md-4">
          <TaskForm />
        </div>
        <div className="col-md-8">
          <div className="row">
            <TaskList tasks={tasks} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
