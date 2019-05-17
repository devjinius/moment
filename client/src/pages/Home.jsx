import React, { Component } from 'react';

import { NewContainer } from '../components/new';
import { TodoContainer } from '../components/todo';

class Home extends Component {
  state = {
    todos: [
      {
        id: 0,
        title: '잠자기',
        desc: '잠자기는 역시 겨울잠. 여름잠을 자고싶다.',
        deadline: '',
        checked: false
      },
      { id: 1, title: '집가기', desc: '집에는 언제 가서 편히 쉴까', deadline: '', checked: true },
      {
        id: 2,
        title: '하잇',
        desc: '안녕하세요 곤니찌와 헬로우 반갑습니다.',
        deadline: '',
        checked: false
      }
    ]
  };

  handleToggle = id => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <>
        <NewContainer />
        <TodoContainer todos={todos} handleToggle={this.handleToggle} />
      </>
    );
  }
}

export default Home;
