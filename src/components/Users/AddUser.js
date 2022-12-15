import styles from "./AddUser.module.css";
import Button from "../UI/Button.js";
import { useState } from "react";
import Card from "../UI/Card.js"
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  function formSubmitHandler(event) {
    event.preventDefault();
    if(enteredName.trim().length === 0 || enteredName.trim().length === 0){
        setError({
            title: "Invalid input",
            message: "Please enter a valid name or age (non-empty)"
        });
        return;
    }
    if (+enteredAge <= 0) {
        setError({
            title: "Invalid age",
            message: "Please age (Greater than 0)."
        });
      return;
    }
    const userData = {
      userName: enteredName,
      age: enteredAge,
    };
    props.onAddUser(userData);
    setEnteredName("");
    setEnteredAge("");
  }
  function nameInputChangeHandler(event) {
    setEnteredName(event.target.value.trim());
  }
  function ageInputChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function errorHandler(){
    setError();
  }
  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onErrorHandler={errorHandler}/>}
    <Card className={styles.input}>
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['input']}`}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={nameInputChangeHandler}
          value={enteredName}
        ></input>
        </div>
        <div className={`${styles['input']}`}>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageInputChangeHandler}
          value={enteredAge}
        ></input>
        <Button type="submit">Add User</Button>
      </div>
    </form>
    </Card>
    </div>
  );
}

export default AddUser;
