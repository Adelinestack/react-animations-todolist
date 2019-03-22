import React, { Component } from 'react';
import styled from 'styled-components';

const Item = styled.li`
  &.todo-enter,
  &.todo-appear {
    opacity: 0;
    max-height: 0;
  }

  &.todo-enter-active,
  &.todo-appear-active {
    max-height: 50px;
    opacity: 1;
    transition: all 3000ms ease;
  }

  &.todo-exit {
    opacity: 1;
    max-height: 50px;
  }

  &.todo-exit-active {
    max-height: 0;
    opacity: 0;
    transition: all 3000ms ease;
  }
`;

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, check, isChecked } = this.props;
    return (
      <Item>
        <input
          type="checkbox"
          id={name}
          name={name}
          onChange={check}
          checked={isChecked}
        />
        <label>{name}</label>
      </Item>
    );
  }
}
