import { useSelector, useDispatch } from "react-redux";
import { edit } from "../store/store";

export function HeadUser() {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const userEdit = useSelector((state) => state.edit);
  const dispatch = useDispatch();

  const handleUserEditClick = (event) => {
    event.preventDefault();
    dispatch(edit());
  };

  

  if (!userEdit) {
    return (
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName + " " + lastName}
        </h1>
        <button className="edit-button" onClick={handleUserEditClick}>
          Edit Name
        </button>
      </div>
    );
  } 
}
