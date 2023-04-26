import { Account } from "../component/Account";
import { useSelector } from "react-redux";
import { HeadUser } from "../component/HeadUser";
import { HeadUserEdit } from "../component/HeadUserEdit";
import "../styles/user.css"

export function User() {
  const userEdit = useSelector((state)=> state.edit)

const head = userEdit ? <HeadUserEdit/> : <HeadUser />
  return (
    <main className="main bg-dark">
        {head}
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
