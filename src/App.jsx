import "./App.css";
import Users from "./Component/Users";

const usersPromise = fetch("http://localhost:3000/users").then((res) =>
  res.json(),
);

function App() {
  return (
    <>
      <section id="center">
        <h1>Hello World</h1>
        <Users usersPromise={usersPromise}></Users>
      </section>
    </>
  );
}

export default App;
