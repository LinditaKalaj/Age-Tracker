import styles from "./AddUser.module.css";
import Button from "../UI/Button.js";
import { useState, useRef } from "react";
import Card from "../UI/Card.js";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  function formSubmitHandler(event) {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value
    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name or age (non-empty)",
      });
      return;
    }
    if (+enteredUserAge <= 0) {
      setError({
        title: "Invalid age",
        message: "Please age (Greater than 0).",
      });
      return;
    }
    const userData = {
      userName: enteredUserName,
      age: enteredUserAge,
    };
    props.onAddUser(userData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }

  function errorHandler() {
    setError();
  }
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorHandler={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              ref={nameInputRef}
            ></input>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              ref={ageInputRef}
            ></input>
            <Button type="submit">Add User</Button>
        </form>
      </Card>
      </>
  );
}

export default AddUser;
