import React, { Component } from 'react';

import { NewContainer } from '../components/new';
import { TodoContainer } from '../components/todo';

import ApiCommon from '../lib/ApiCommon';

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

  componentDidMount() {
    ApiCommon.get('/api/todos').then(res => {
      const { data } = res.data;
      this.setState({
        ...this.state,
        todos: data
      });
    });
  }

  handleChange = e => {
    this.setState({
      newInput: e.target.value
    });
  };

  createTodo = async () => {
    const { newInput, todos } = this.state;
    if (newInput === '') {
      alert('내용을 입력해주세요.'); // modal로 변경 예정
      return;
    }

    const submitData = { title: newInput };

    ApiCommon.post('/api/todo', submitData).then(res => {
      const { data } = res.data;
      this.setState({
        newInput: '',
        todos: todos.concat(data)
      });
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
        <NewContainer value={newInput} onChange={this.handleChange} onCreate={this.createTodo} />
        <TodoContainer todos={todos} handleToggle={this.handleToggle} />
      </>
    );
  }
}

export default Home;
