import "./App.css";
import { Context } from "./formHook/context/Context";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormReact from "./formHook/FormReact";
// import Todo from "./todo/Todo";
import Users from "./formHook/Users";
import Edit from "./formHook/Edit";
import Todo from "./todo/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ul>
            <li>
              <Link to="/FormReact">Login</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
          </ul>
          <Context>
            <Routes>
              <Route path="/FormReact" element={<FormReact />}></Route>
              <Route path="/users" element={<Users />}></Route>
              <Route path="/edit" element={<Edit />}></Route>
              <Route path="/todo" element={<Todo />}></Route>
            </Routes>
          </Context>
        </Router>
      </header>
    </div>
  );
}

export default App;
