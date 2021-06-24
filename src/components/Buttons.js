import React from "react";
import styled from "styled-components";

export const SolidBtn = ({ label }) => {
  return (
    <SolidButton type="submit" aria-disabled="true">
      {label}
    </SolidButton>
  );
};

const SolidButton = styled.button`
  background: none;
  background-color: #db4c3f;
  color: #fff !important;
  font-weight: 700;
  font-size: 13px !important;
  line-height: 17px;
  text-decoration: none;
  padding: 6px 12px 7px;
  position: relative;
  display: inline-block;
  text-shadow: 0 1px 0 #fff;
`;

export const CancelBtn = ({ onCancel }) => {
  return (
    <button onClick={() => onCancel()} type="button">
      Cancel
    </button>
  );
};

export const AddBtn = ({ addTask }) => {
  return (
    <PlusButton
      onClick={() => addTask()}
      type="button"
      className="plus_add_btn"
    >
      <PlusIcon className="icon_add">
        <Plus />
      </PlusIcon>
      Add Task
    </PlusButton>
  );
};

const PlusIcon = styled.span`
  align-items: center;
  border-radius: 50%;
  color: #dd4b39;
  display: inline-flex;
  height: 17px;
  justify-content: center;
  margin-right: 11px;
  -webkit-transform: translateY(8px);
  transform: translateY(8px);
  vertical-align: 7px;
  width: 17px;
`;

const PlusButton = styled.button`
  text-align: left;
  width: 100%;
  margin-left: -2px;
  padding: 0 0 8px;
  color: grey;
  font-size: 14px;
  white-space: nowrap;
  text-decoration: none;
`;

export const Plus = () => {
  return (
    <svg width="13" height="13">
      <path
        d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export const CompleteBtn = () => {
  return (
    <Checkbox type="button">
      <Circle></Circle>
    </Checkbox>
  );
};

const Checkbox = styled.button`
  //margin: 8px 6px 0 -3px;
  margin-right: 6px;
  z-index: 1;
`;

const Circle = styled.div`
  height: 16px;
  width: 16px;
  border: 1px solid;
  border-color: grey;
  color: grey;
  border-radius: 50%;
`;

export const Check = () => {
  return (
    <Svg width="24" height="24">
      <path
        fill="currentColor"
        d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
      ></path>
    </Svg>
  );
};

const Svg = styled.svg`
  display: inline-block;
  border: 1px solid transparent;
  height: 16px;
  width: 16px;
  margin-left: -8px;
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
  margin-top: -8px;
  pointer-events: none;
  opacity: 0;
`;

export const DeleteBtn = ({ id, onDelete }) => {
  return (
    <button type="button" onClick={() => onDelete(id)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h24v24H0z"></path>
          <rect
            width="14"
            height="1"
            x="5"
            y="6"
            fill="currentColor"
            rx=".5"
          ></rect>
          <path fill="currentColor" d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z"></path>
          <path
            stroke="currentColor"
            d="M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z"
          ></path>
        </g>
      </svg>
    </button>
  );
};

export const EditBtn = ({ onEdit }) => {
  return (
    <button type="button" onClick={() => onEdit()}>
      <svg width="24" height="24">
        <g fill="none" fillRule="evenodd">
          <path
            fill="currentColor"
            d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z"
          ></path>
          <path
            stroke="currentColor"
            d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z"
          ></path>
        </g>
      </svg>
    </button>
  );
};
