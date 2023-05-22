import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { cancelEdit, setUser } from "../store/store";
import { putUser } from "../api/callAPI";
export function HeadUserEdit() {
  
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token)
  const [firstName, setFirstName] = useState(user.firstName)
  const [lastName, setlastName] = useState(user.lastName)


  const dispatch = useDispatch();
  const handleCancelUserEditClick = (event) => {
    event.preventDefault();
    dispatch(cancelEdit());
  };

  const  handleSaveClick = async (event) => {
    event.preventDefault();
    const body = { firstName : firstName, lastName : lastName };
    putUser("http://localhost:3001/api/v1/user/profile", token, body).then(
        (data)=> {
            dispatch(setUser(data.body))
            dispatch(cancelEdit())
        }
    )
  }

  return (
    <div className="header">
      <h1>Welcome back</h1>
      <form className="editForm">
        <div>
          <input type="text" id="firstName" placeholder={firstName}  onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" id="lastName" placeholder={lastName}  onChange={(e) => setlastName(e.target.value)} />
        </div>
        <div>
          <button className="edit-button" onClick={handleSaveClick}>Save</button>
          <button className="edit-button" onClick={handleCancelUserEditClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
