import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './todo.css';

export default class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskstodo: ['Cartons', 'EDF', 'Internet', 'Meubles', 'Poste'],
      tasksdone: [],
    };
  }

  check = index => {
    this.setState(({ taskstodo, tasksdone }) => {
      const item = taskstodo[index];
      return {
        taskstodo: [
          ...taskstodo.slice(0, index),
          ...taskstodo.slice(index + 1),
        ],
        tasksdone: [...tasksdone, item],
      };
    });
  };

  uncheck = index => {
    this.setState(({ taskstodo, tasksdone }) => {
      const item = tasksdone[index];
      return {
        tasksdone: [
          ...tasksdone.slice(0, index),
          ...tasksdone.slice(index + 1),
        ],
        taskstodo: [...taskstodo, item],
      };
    });
  };

  render() {
    const { taskstodo, tasksdone } = this.state;
    const todolist = taskstodo.map((task, index) => (
      <CSSTransition key={task} timeout={3000} classNames="todo">
        <TodoItem
          name={task}
          key={task}
          check={this.check.bind(this, index)}
          isChecked={false}
        />
      </CSSTransition>
    ));
    const donelist = tasksdone.map((task, index) => (
      <CSSTransition key={task} timeout={3000} classNames="todo">
        <TodoItem
          name={task}
          key={task}
          isChecked={true}
          check={this.uncheck.bind(this, index)}
        />
      </CSSTransition>
    ));

    return (
      <div>
        <div>
          <ul>
            <TransitionGroup>{todolist}</TransitionGroup>
          </ul>
        </div>
        <hr />
        <div>
          <ul>
            <TransitionGroup>{donelist}</TransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
}
