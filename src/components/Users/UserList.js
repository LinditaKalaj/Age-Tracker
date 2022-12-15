import style from "./UsersList.module.css";
import Card from "../UI/Card";

function UserList(props) {
  if (props.currUserList.length === 0) {
    return (
      <Card className={style.users}>
        <h2>
          <p>No Users Found.</p>
        </h2>
      </Card>
    );
  }
  return (
    <Card className={style.users}>
      <ul>
        {props.currUserList.map((index) => (
          <li key={index.id}>
            {index.userName} ({index.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
