import Task from '../interfaces/task';

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  return (
    <div className="card card-body rounded-0 text-black">
      <h2>{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
};

export default TaskCard;
