import { use } from "react";

function Users({ usersPromise }) {
  const user = use(usersPromise);
  console.log(user);

  const handleNewUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
  };

  return (
    <div>
      <div>
        <h1>Add Users</h1>
        <form onSubmit={handleNewUser}>
          <input name="name" type="text" placeholder="Username" />
          <br></br>
          <input name="email" type="text" placeholder="Email" />
          <br></br>
          <button type="submit">Add User</button>
        </form>
      </div>
      <div>
        {user.map((user) => (
          <p>
            Id: {user.id}, Name: {user.username}, Email: {user.email}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Users;
