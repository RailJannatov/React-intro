const User = (props) => {
  return (
    <div className="user">
      <h1>{props.name}</h1>
      <p>{props.username}</p>
    </div>
  );
};

export default User;
