import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

const CategoryHome = (props) => {

  let { path, url } = useRouteMatch();

  let categories = [
    'drama',
    'comedy',
    'action',
    'suspense',
  ]

  return (
    <>
      <div>
        <h3>Filter by category</h3>

        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link className="text-capitalize" to={`${url}/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CategoryHome;