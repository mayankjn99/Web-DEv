// import React from 'react'; // Ensure React is in scope when using JSX
import TodoItem from './TodoItem';

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos }) => {
    console.log('todos', todos); // Corrected the log label for consistency

    return (
        <ul>
            
            {// eslint-disable-next-line react/prop-types
            todos?.map(todo => (
                // The key prop should be unique for each child in a list
                // Assuming each todo has a unique id
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;
