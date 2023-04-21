export function LogoutButton({ name }) {
  return (
    <div>
    <a className="main-nav-item" href="./profil">
      <i className="fa fa-user-circle"></i>
      tony {name}
    </a>
    <a className="main-nav-item" href="/">
      <i className="fa fa-sign-out"></i>
      Sign Out
    </a>
  </div>
  );
}
