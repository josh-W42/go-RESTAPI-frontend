import { useParams } from "react-router-dom";

const CategoryPage = (props) => {

  let { category } = useParams();

  return (
    <>
      <div className="container">
        <h3>This is the {category} Page</h3> 
      </div>
    </>
  );
}

export default CategoryPage;