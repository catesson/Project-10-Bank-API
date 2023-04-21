import { Account } from "../component/Account";

export function User() {
  return (
    <main className="main bg-dark">
        <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
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
