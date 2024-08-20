import { Link } from "react-router-dom"

function HomePage() {
  return (
    <>
      <h1>LE HOMEPAGE</h1>
      <Link to="/insurance">
        <button>Insurance</button>
      </Link>
      <Link to="/recruitment">
        <button>Career</button>
      </Link>
    </>
  );
}

export default HomePage
