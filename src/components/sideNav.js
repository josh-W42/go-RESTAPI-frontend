import { Link } from "react-router-dom";

const SideNavigation = () => {
  return (
    <div className="row">
      <div className="col">
        <nav>
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-group-item">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="list-group-item">
              <Link to="/by-category">Categories</Link>
            </li>
            <li className="list-group-item">
              <Link to="/admin">Manage Catalog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideNavigation;