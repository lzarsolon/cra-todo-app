import React, { useState } from "react";
import styled from "styled-components";
import { SolidBtn, CancelBtn } from "./Buttons";

export const TaskForm = ({ onAdd, onCancel }) => {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: Math.floor(Math.random() * 10000), text: input });
    setInput("");
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="What do you want to do today?"
          value={input}
          onChange={onChange}
        />
        <div className="edit_actions">
          <SolidBtn label="Add Task" onAdd={onSubmit} />
          <CancelBtn onCancel={onCancel} />
        </div>
      </Form>
      {/* <Form>
        <Input type="text" />
        <div className="edit_actions">
          <SolidBtn label="Save" />
          <CancelBtn />
        </div>
      </Form> */}
    </>
  );
};

const Form = styled.form`
  padding: 4px 0 !important;
  background: none !important;
  margin-bottom: 9px;
  padding: 0;
  margin: 0;
`;

const Input = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 1px solid #ddd;
  outline: none;
  background: transparent;
  color: #000;
  width: 100%;
`;
