import TaskItem from "./TaskItem";
import { Task } from "../data";

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
  editTask: (id: number, newText: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, toggleTask, editTask }) => {
  return (
    <ul className="list-group mt-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
//display the task list