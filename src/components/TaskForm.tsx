import { useState } from "react";

interface TaskFormProps {
  addTask: (text: string, cost: number) => void; // ➕ Updated function to accept `cost`
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [text, setText] = useState("");
  const [cost, setCost] = useState<string>(""); // Tracks cost as a string to handle user input

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return; // Prevents empty tasks
    const parsedCost = parseFloat(cost) || 0; // Converts cost input to a number
    addTask(text, parsedCost); // Passes `text` and `cost` to `addTask`
    setText("");
    setCost(""); // Clears both fields after submission
  };

  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="d-flex">
        {/* Task Name Input */}
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Cost Input */}
        <input
          type="number"
          className="form-control me-2"
          placeholder="Estimated cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />

        <button type="submit" className="btn btn-primary">Add Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
