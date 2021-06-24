import React, { useState } from "react";
import { Task } from "./Task";
import { AddBtn } from "./Buttons";
import { TaskForm } from "./TaskForm";
import styled from "styled-components";

export const TaskList = () => {
  const [toAdd, setToAdd] = useState(false);
  const [tasks, setTasks] = useState([]);

  const onClickAdd = () => {
    setToAdd(true);
  };

  const onClickCancel = () => {
    setToAdd(false);
  };

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = [...tasks].filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  const editTask = () => {};

  return (
    <div className="list-holder">
      <TaskItems>
        {tasks.map((task) => (
          <Item key={task.id}>
            <Task task={task} onEdit={editTask} onDelete={deleteTask} />
          </Item>
        ))}
        <Item>
          {!toAdd ? (
            <AddBtn addTask={onClickAdd} />
          ) : (
            <TaskForm onCancel={onClickCancel} onAdd={addTask} />
          )}
        </Item>
      </TaskItems>
    </div>
  );
};

const TaskItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Item = styled.li`
  display: list-item;
`;
