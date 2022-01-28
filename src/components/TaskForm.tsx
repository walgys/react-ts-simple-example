import { ChangeEvent, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const TaskForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Add Task</h1>
      <form>
        <input
          type="text"
          placeholder="Write a title"
          name="title"
          className="form-control mb-3 rounded-0 border-o"
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          rows={2}
          placeholder="Write a description"
          className="form-control mb-3 shadow-none border-0"
          onChange={handleInputChange}
        ></textarea>
        <button className="btn btn-primary">
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
