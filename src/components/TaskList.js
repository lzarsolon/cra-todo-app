import React, { useState } from "react";
import { Task } from "./Task";
import { AddBtn } from "./Buttons";
import { TaskForm } from "./TaskForm";
import styled from "styled-components";

export const TaskList = (props) => {
  const [toAdd, setToAdd] = useState(false);
  const onClickAdd = () => {
    setToAdd(true);
  };

  const onClickCancel = () => {
    setToAdd(false);
  };

  return (
    <>
      <TaskItems>
        {props.tasks.map((task) => (
          <Item key={task.id}>
            <Task
              task={task}
              onEdit={props.edit}
              onDelete={props.delete}
              onCancel={onClickCancel}
              onComplete={props.complete}
            />
          </Item>
        ))}
        <Item>
          {!toAdd ? (
            <AddBtn addTask={onClickAdd} />
          ) : (
            <TaskForm onCancel={onClickCancel} onAdd={props.add} />
          )}
        </Item>
      </TaskItems>
    </>
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
