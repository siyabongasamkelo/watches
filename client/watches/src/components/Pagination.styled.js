import styled from "styled-components";

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Li = styled.li`
  margin: 0 5px;
`;

export const PaginatioButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #f2f2f2;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.light.secondary};
  }

  &.active {
    background-color: #007bff;
    color: #fff;
    border-color: #007bff;
  }
`;
