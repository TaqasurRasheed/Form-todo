import React, { useState } from "react";
const Login = () => {
  const [name, setName] = useState("");
  const [lName, setLname] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && lName) {
      const newEntry = {
        id: new Date().getTime().toString(),
        name,
        lName,
      };
      setUser([...user, newEntry]);
    } else {
      alert("plz fill the data");
    }
    console.log(user);
  };

  return (
    <div>
      <form method="" onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          placeholder="First Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          value={lName}
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLname(e.target.value)}
        ></input>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {/* <div>
        {Object.values(user)?.map((user) => {
          const { id, name, lName } = user;
          return (
            <div key={id}>
              <p>{name}</p>
              <p>{lName}</p>
            </div>
          );
        })}
      </div> */}

      <table
        className="table"
        style={{
          border: "1px solid white ",
          padding: "5px",
          margin: "15px",
        }}
      >
        <thead
          style={{
            border: "1px solid white ",
            padding: "5px",
            margin: "15px",
            backgroundColor: "green",
          }}
        >
          <tr>
            <th style={{ border: "1px solid white" }}>Id</th>
            <th style={{ border: "1px solid white" }}>First Name</th>
            <th style={{ border: "1px solid white" }}>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(user)?.map((data, index) => {
            const { name, lName } = data;
            return (
              <tr key={index}>
                <td style={{ border: "1px solid white" }}>{index + 1}</td>
                <td style={{ border: "1px solid white" }}>{name}</td>
                <td style={{ border: "1px solid white" }}>{lName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Login;
