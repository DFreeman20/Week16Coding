import TaskItem from "./TaskItem";
import { Task } from "../data";

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <ul className="list-group mt-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleTask={toggleTask} />
      ))}
    </ul>
  );
};

export default TaskList;
//display the task list