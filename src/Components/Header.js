import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header">
        <div className="logo">
          <Link to="/">Crypto Hunter</Link>
        </div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/crypto">Crypto Valuties</Link>{" "}
          | <Link to="/trend">Trends</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
