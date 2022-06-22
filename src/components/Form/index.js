const Form = ({ tasks, setTasks }) => {
  const customUuid = () => {
    const date = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return `${date}${random}`;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: customUuid(),
      value: e.target.task.value
    };
    setTasks([...tasks, newTask]);
    e.target.task.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit} className="form">
      <input type="text" name="task" placeholder="Add task" />
      <button>Add</button>
    </form>
  );
};

export default Form;
