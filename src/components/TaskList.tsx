import Task from '../interfaces/task';
import TaskCard from './TaskCard';

interface Props {
  tasks: Task[];
}

const TaskList = ({ tasks }: Props) => {
  return (
    <>
      {tasks?.map((task) => (
        <TaskCard task={task} />
      ))}
    </>
  );
};

export default TaskList;
