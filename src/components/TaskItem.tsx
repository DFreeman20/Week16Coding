import { Task } from "../data";

interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask, toggleTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={task.completed ? "text-decoration-line-through" : ""}
        onClick={() => toggleTask(task.id)}
        style={{ cursor: "pointer" }}
      >
        {task.text}
      </span>
      <div>
        <button className="btn btn-warning btn-sm me-2" onClick={() => toggleTask(task.id)}>
          {task.completed ? "Undo" : "Done"}
        </button>
        <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>
          ❌
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
//edit and delete buttons