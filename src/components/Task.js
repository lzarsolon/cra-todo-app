import React from "react";
import { CompleteBtn, EditBtn, DeleteBtn } from "./Buttons";
import styled from "styled-components";

export const Task = ({ task, onEdit, onDelete }) => {
  return (
    <Item>
      <CompleteBtn />
      <Text>{task.text}</Text>
      <Actions>
        <EditBtn onEdit={onEdit} />
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
  // margin-right: -38px;
  // margin-top: 8px;
  // padding-left: 16px;
  // position: absolute;
  // right: 0;
  // top: 0;
`;

const Item = styled.div`
  display: flex;
  align-items: center; //stretch;
  position: relative;
  padding: 0;
  cursor: pointer;
  flex: 1;
  padding: 8px 0;
  //margin-right: 30px;
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
`;

const Text = styled.div`
  flex: 1;
  padding: 8px 0;
  //margin-right: 30px;
`;
