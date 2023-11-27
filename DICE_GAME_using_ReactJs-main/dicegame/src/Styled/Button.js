import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  width: 220px;
  padding: 10px 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 5px;
  background: #000;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;
  float: right;

  &:hover {
    background-color: #d3c5c5;
    border: 1px solid black;
    color: #000;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
