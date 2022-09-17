import React from "react";
import { useForm } from "react-hook-form";
const Form = () => {
  const { register, handleSubmit } = useForm();
  // const [name, setName] = useState("");
  // const [lName, setLname] = useState("");
  // const [user, setUser] = useState("");
  // const [isEditItem, setIsEditItem] = useState(null);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (name && lName) {
  //     const newEntry = {
  //       id: new Date().getTime().toString(),
  //       name,
  //       lName,
  //     };
  //     setUser([...user, newEntry]);
  //     setName("");
  //     setLname("");
  //     setIsEditItem(null);
  //   } else {
  //     alert("plz fill the data");
  //   }
  // };

  // const editItem = (id) => {
  //   const userList = user.map((u) => {
  //     if (u.id === id) return { ...u, name, lName };
  //   });
  //   setName(userList.name);
  //   setLname(userList.lName);
  //   setUser(userList);
  //   setIsEditItem(id);
  //   console.log(userList);
  // };
  // const onSubmit = (data, e) => console.log(data, e);
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form method="" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          type="text"
          placeholder="First Name"
          // onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          {...register("lname")}
          type="text"
          placeholder="Last Name"
          // onChange={(e) => setLname(e.target.value)}
        ></input>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {/* <div>
        {Object.values(user)?.map((curElem) => {
          const { id, name, lName } = curElem;
          return (
            <div>
              <p key={id}></p>
              <p>Email: {name}</p>
              <p> LAst Name: {lName}</p>
              <div>
                <button onClick={() => editItem(id)}>Edit</button>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Form;
