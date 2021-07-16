import React, { useState } from "react";
import { Header } from "./Header";
import { TaskList } from "./TaskList";
import styled from "styled-components";

export const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = [...tasks].filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const editTask = (task) => {
    const updatedTasks = [...tasks].map((t) =>
      t.id === task.id
        ? { id: t.id, text: task.text }
        : { id: t.id, text: t.text }
    );
    setTasks(updatedTasks);
  };

  const completeTask = (id) => {
    const ct = tasks.find((t) => t.id === id);
    const newCompletedTasks = [...completedTasks, ct];
    setCompletedTasks(newCompletedTasks);
    deleteTask(id);
  };

  return (
    <>
      <div className="navbar"></div>
      <div className="todo-app">
        <Header label="Today" showDate={true} />
        <div className="content">
          <TaskList
            tasks={tasks}
            add={addTask}
            edit={editTask}
            complete={completeTask}
            delete={deleteTask}
          />
        </div>
      </div>
      {completedTasks.length > 0 && (
        <div className="todo-app">
          <Header label="Completed" showDate={false} />
          <div className="content">
            <TaskItems>
              {completedTasks.map((ct) => (
                <TaskItem>{ct.text}</TaskItem>
              ))}
            </TaskItems>
          </div>
        </div>
      )}
    </>
  );
};

const TaskItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const TaskItem = styled.div`
  display: flex;
  align-items: center; //stretch;
  position: relative;
  padding: 0;
  cursor: pointer;
  flex: 1;
  padding: 8px 0;
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
`;
