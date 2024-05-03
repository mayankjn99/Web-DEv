import PropTypes from 'prop-types';

const TodoItem = ({todo}) => {
    console.log('hello', todo.text)
    return (
        // render each item with an option to delete , edit 
        <li>{todo.text}</li> // Ensure that you're accessing a valid property of the todo object
    )
}

TodoItem.propTypes = { 
    todo: PropTypes.object
}

export default TodoItem