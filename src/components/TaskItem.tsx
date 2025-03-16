import { useState } from "react";
import { Task } from "../data";

interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
  editTask: (id: number, newText: string, newCost: number) => void; // Updated editTask to include cost
}

const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask, toggleTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [newCost, setNewCost] = useState(task.cost.toString()); // ➕ New state for cost (as string for input)

  const handleSave = () => {
    const parsedCost = parseFloat(newCost) || 0; // Ensure cost is a valid number
    if (newText.trim()) {
      editTask(task.id, newText, parsedCost);
    }
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      {isEditing ? (
        <div className="d-flex flex-column w-100">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleSave}
            autoFocus
            className="form-control mb-2"
          />
          <input
            type="number"
            value={newCost}
            onChange={(e) => setNewCost(e.target.value)}
            onBlur={handleSave}
            className="form-control"
          />
        </div>
      ) : (
        <div
          className={`d-flex flex-column ${task.completed ? "text-decoration-line-through" : ""}`}
          onClick={() => toggleTask(task.id)}
          style={{ cursor: "pointer" }}
        >
          <span>{task.text}</span>
          <small className="text-muted">Estimated Cost: ${task.cost.toFixed(2)}</small>
        </div>
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
