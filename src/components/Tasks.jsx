import Task from "./Task"

const Tasks = ({tasks,onDelete,onToggle}) => {
  return (
    <div style={{height: "calc(100% - 360px)", overflow: "auto"}}>
      {
        tasks.map((task) =>(
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))
      }
    </div>
  )
}

export default Tasks
