import { useState } from "react";
import { Task } from "../data";

interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
  editTask: (id: number, newText: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask, toggleTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    if (newText.trim()) {
      editTask(task.id, newText);
    }
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleSave}
          autoFocus
          className="form-control"
        />
      ) : (
        <span
          className={task.completed ? "text-decoration-line-through" : ""}
          onClick={() => toggleTask(task.id)}
          style={{ cursor: "pointer" }}
        >
          {task.text}
        </span>
      )}
      <div>
        <button className="btn btn-warning btn-sm me-2" onClick={() => setIsEditing(true)}>
          ✏️ Edit
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