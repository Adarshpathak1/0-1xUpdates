
const Todo = ({props}) => {
  return (
      <div>hi
          <h2>{ props.title }</h2>
          <p>{ props.description }</p>
    </div>
  )
}

export default Todo;