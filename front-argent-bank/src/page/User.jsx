import { Account } from "../component/Account";
import { useSelector } from "react-redux";

export function User() {
  const firstName = useSelector((state) => state.user.firstName)
  const lastName = useSelector((state) => state.user.lastName)
  
  return (
    <main className="main bg-dark">
        <div className="header">
        <h1>Welcome back<br />{ firstName+ " "+lastName}</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        countType="Argent Bank Checking (x8349)"
        value="2,082.79"
        balance="Available Balance"
      />
      <Account
        countType="rgent Bank Savings (x6712)"
        value="10,928.42"
        balance="Available Balance"
      />
      <Account
        countType="Argent Bank Credit Card (x8349)"
        value="184.30"
        balance="Current Balance"
      />
    </main>
  );
}
