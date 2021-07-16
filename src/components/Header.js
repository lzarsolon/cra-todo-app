import React from "react";
import styled from "styled-components";

export const Header = ({ label, showDate }) => {
  const date = new Date();
  const today = date.toDateString();

  return (
    <Div>
      <H1>
        <Title>{label}</Title>
        {showDate && <DateToday>{today}</DateToday>}
      </H1>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 8px;
  max-width: 800px;
  margin: 0 auto;
  border-bottom: 2px solid #f0f0f0;
  align-items: flex-start;
  justify-content: space-between;
  word-break: break-word;
`;

const H1 = styled.div`
  border-radius: 5px;
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

const Title = styled.span``;

const DateToday = styled.small`
  color: grey;
  margin-left: 6px;
  font-size: 12px;
  font-weight: 400;
`;
