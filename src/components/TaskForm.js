import React, { useState } from "react";
import styled from "styled-components";
import { SolidBtn, CancelBtn } from "./Buttons";

export function TaskForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit?.text : "");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (props.edit) {
      props.onAdd({ id: props.edit?.id, text: input });
    } else {
      props.onAdd({ id: Math.floor(Math.random() * 10000), text: input });
    }

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
          <SolidBtn input={input} label={props.edit ? "Save" : "Add Task"} />
          <CancelBtn onCancel={props.onCancel} />
        </div>
      </Form>
    </>
  );
}

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
