

export function Account({countType, value, balance}){
    return <section className="account">
    <div className="account-content-wrapper">
      <h3 className="account-title">{countType}</h3>
      <p className="account-amount">${value}</p>
      <p className="account-amount-description">{balance}</p>
    </div>
    <div className="account-content-wrapper cta">
      <button className="transaction-button">View transactions</button>
    </div>
  </section>
}