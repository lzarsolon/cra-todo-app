import React, { useState } from "react";
import { CompleteBtn, EditBtn, DeleteBtn } from "./Buttons";
import styled from "styled-components";
import { TaskForm } from "./TaskForm";

export const Task = ({ task, onEdit, onDelete, onCancel }) => {
  const [editTask, setEditTask] = useState(null);

  const onEditTask = (editedTask) => {
    onEdit(editedTask);
    setEditTask(null);
  };

  const onClickCancel = () => {
    setEditTask(null);
  };

  const setEdit = (task) => {
    onCancel();
    setEditTask(task);
  };

  if (editTask) {
    return (
      <TaskForm edit={editTask} onAdd={onEditTask} onCancel={onClickCancel} />
    );
  }

  return (
    <Item>
      <CompleteBtn />
      <Text>{task.text}</Text>
      <Actions>
        <EditBtn setEdit={setEdit} task={task} />
        <DeleteBtn onDelete={onDelete} id={task.id} />
      </Actions>
    </Item>
  );
};

const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 24px;
  align-item: center;
`;

const Item = styled.div`
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

const Text = styled.div`
  flex: 1;
  padding: 8px 0;
`;
