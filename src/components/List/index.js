import ListItem from "../ListItem";

const List = ({ tasks, deleteTask }) => {
  return (
    <>
      {tasks.map((item) => (
        <div key={item.id} className="list-item">
          <ListItem item={item} />
          <button onClick={() => deleteTask(item.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default List;
