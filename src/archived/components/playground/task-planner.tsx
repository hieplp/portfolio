"use client";

import { useRef, useState } from "react";

const seeds = [
  { text: "Find the right problem", checked: true },
  { text: "Make something useful", checked: false },
  { text: "Sweat the small details", checked: false },
];

export default function TaskPlanner() {
  const [tasks, setTasks] = useState(seeds);
  const [draft, setDraft] = useState("");
  const [feedback, setFeedback] = useState("");
  const [invalid, setInvalid] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const add = () => {
    const text = draft.trim();
    if (!text) {
      setFeedback("Enter a task before adding it.");
      setInvalid(true);
      inputRef.current?.focus();
      return;
    }
    if (tasks.length >= 8) {
      setFeedback("This demo holds 8 tasks. Reset it to start again.");
      return;
    }
    setTasks([...tasks, { text, checked: false }]);
    setDraft("");
    setInvalid(false);
    setFeedback("Task added.");
    inputRef.current?.focus();
  };

  return (
    <div className="task-app" aria-label="Interactive sample task planner">
      <div className="app-header">
        <strong className="app-name">
          commit<span>.</span>
        </strong>
        <span className="demo-label">INTERACTIVE DEMO</span>
      </div>
      <p className="task-intro">Make room for a good idea.</p>
      <div className="task-list" id="task-list">
        {tasks.map((task, index) => (
          <label className="task" key={`${task.text}-${index}`}>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() =>
                setTasks(
                  tasks.map((item, position) =>
                    position === index ? { ...item, checked: !item.checked } : item,
                  ),
                )
              }
            />
            <span>{task.text}</span>
          </label>
        ))}
      </div>
      <label className="task-input-label" htmlFor="new-task">
        Add a task
      </label>
      <div className="task-entry">
        <input
          ref={inputRef}
          id="new-task"
          value={draft}
          placeholder="What’s on your mind?"
          maxLength={60}
          aria-describedby="task-feedback"
          autoComplete="off"
          aria-invalid={invalid || undefined}
          onChange={(event) => {
            setDraft(event.target.value);
            if (event.target.value.trim()) {
              setInvalid(false);
              setFeedback("");
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              add();
            }
          }}
        />
        <button
          id="add-task"
          className="add-task"
          type="button"
          aria-label="Add task"
          onClick={add}
        >
          +
        </button>
      </div>
      <div className="task-bottom">
        <p className="task-status" id="task-status" role="status">
          {tasks.filter((task) => task.checked).length} of {tasks.length} complete
        </p>
        <button
          id="reset-tasks"
          className="reset-tasks"
          type="button"
          onClick={() => {
            setTasks(seeds);
            setDraft("");
            setInvalid(false);
            setFeedback("Demo reset.");
          }}
        >
          Reset demo ↻
        </button>
      </div>
      <p className="task-feedback" id="task-feedback" role="status">
        {feedback}
      </p>
    </div>
  );
}