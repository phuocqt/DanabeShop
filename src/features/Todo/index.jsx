import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function Todo() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍 ', status: 'new' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ', status: 'completed' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ', status: 'new' },
  ]);
  function handleTodoClick(todo, idx) {
    const newTodoList = [...todoList];
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'completed' ? 'new' : 'completed',
    };
    console.log(idx);
    setTodoList(newTodoList);
  }
  const [fiterStatus, setFilterStatus] = useState('all');

  function handleFormSubmit(formValue) {
    const newTodoList = [...todoList];
    newTodoList.push(formValue);
    setTodoList(newTodoList);
    console.log(formValue);
    console.log(todoList);
  }
  function handleShowAll() {
    setFilterStatus('all');
  }
  function handleShowNew() {
    setFilterStatus('new');
  }
  function handleShowCompleted() {
    setFilterStatus('completed');
  }
  const filterTodoList = todoList.filter((todo) => fiterStatus === 'all' || todo.status === fiterStatus);
  return (
    <div className="app" style={{ margin: '50px' }}>
      <h1>ReactJs</h1>
      <TodoForm onSubmit={handleFormSubmit} />
      <TodoList todos={filterTodoList} onTodoClick={handleTodoClick} />
      <button onClick={handleShowAll}>Show All</button>
      <button onClick={handleShowNew}>Show New</button>
      <button onClick={handleShowCompleted}>Show Completed</button>
    </div>
  );
}

export default Todo;
