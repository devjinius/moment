import React, { Component } from 'react';

import { NewContainer } from '../components/new';
import { TodoContainer } from '../components/todo';

class Home extends Component {
  state = {
    newInput: '',
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

  handleChange = e => {
    this.setState({
      newInput: e.target.value
    });
  };

  handleCreate = () => {
    const { newInput, todos } = this.state;
    if (newInput === '') {
      alert('내용을 입력해주세요.'); // modal로 변경 예정
      return;
    }
    this.setState({
      newInput: '',

      // axios로 데이터 받아오기
      todos: todos.concat({
        id: 10,
        title: newInput,
        desc: '',
        deadline: '2019-12-20',
        checked: false
      })
    });
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
    const { newInput, todos } = this.state;

    return (
      <>
        <NewContainer value={newInput} onChange={this.handleChange} onCreate={this.handleCreate} />
        <TodoContainer todos={todos} handleToggle={this.handleToggle} />
      </>
    );
  }
}

export default Home;