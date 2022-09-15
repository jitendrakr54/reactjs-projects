import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
// import Wrapper from "../Helpers/Wrapper";

// const AddUser = (props) => {
//   const [enteredUsername, setEnteredUsername] = useState(""); // intialize state
//   const [enteredUserAge, setEnteredAge] = useState("");
//   const [error, setError] = useState();

//   const addUserHandler = (event) => {
//     event.preventDefault();
//     if (
//       enteredUsername.trim().length === 0 ||
//       enteredUserAge.trim().length === 0
//     ) {
//       setError({
//         title: "Invalid input",
//         message: "Please enter a valid name an age (non-empty values).",
//       });
//       return;
//     }
//     if (+enteredUserAge < 1) {
//       setError({
//         title: "Invalid age",
//         message: "Please enter a valid age (> 0).",
//       });
//       return;
//     }
//     // console.log(enteredUsername, enteredAge);
//     props.onAddUser(enteredUsername, enteredUserAge);
//     setEnteredUsername("");
//     setEnteredAge("");
//   };

//   const usernameChangeHandler = (event) => {
//     setEnteredUsername(event.target.value);
//   };

//   const ageChangeHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };

//   const errorHandler = () => {
//     setError(null);
//   };

//   return (
//     <>
//       {error && (
//         <ErrorModal
//           title={error.title}
//           message={error.message}
//           onConfirm={errorHandler}
//         />
//       )}
//       <Card className={styles.input}>
//         <form onSubmit={addUserHandler}>
//           <label htmlFor="username">Username</label>
//           <input
//             id="username"
//             type="text"
//             value={enteredUsername}
//             onChange={usernameChangeHandler}
//           />
//           <label htmlFor="age">Age (Years)</label>
//           <input
//             id="age"
//             type="number"
//             value={enteredUserAge}
//             onChange={ageChangeHandler}
//           />
//           <Button type="Submit">Add User</Button>
//         </form>
//       </Card>
//     </>
//   );
// };

// Using refs
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    // console.log(nameInputRef.current.value, ageInputRef.current.value);
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name an age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = ""; // Resetting logic
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="Submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
