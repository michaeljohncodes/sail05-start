import React, { useState } from "react";

const Contact = () => {
  const [myName, setMyName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("I am a new user");
  const [users, setUsers] = useState([]);

  console.log(users);

  const submitData = (e) => {
    e.preventDefault();
    setUsers([...users, { myName, email, bio }]);
    // setUsers([...users, {name:myName, email:email, bio:bio}])
    setMyName("");
    setEmail("");
    setBio("I am a new user");
  };

  console.log(myName);

  return (
    <div>
      <h1>This is the contact Form</h1>
      <section className=" m-10">
        <main>
          <form onSubmit={submitData} className=" flex flex-col max-w-[500px]">
            <input
              type="text"
              placeholder="Enter your name"
              value={myName}
              onChange={(e) => {
                setMyName(e.target.value);
              }}
            />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <textarea
              placeholder="Enter your bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
            <button type="submit">Submit</button>
          </form>
        </main>
        <main className=" flex flex-wrap">
          {users.map((data, i) => (
            <div className=" bg-amber-300 max-w-80 p-12 m-6" key={i}>
              <h1>
                <b>Name: {data.myName} </b>
              </h1>
              <i>
                <b>Email: {data.email} </b>
              </i>
              <p>
                <b>Bio: {data.bio}</b>
              </p>
            </div>
          ))}
        </main>
      </section>
    </div>
  );
};

export default Contact;
