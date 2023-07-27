import Link from "next/link";

const FoodCategory = ({ foodCat }) => {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    foodCat;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          <Link href={`blog/airtical/${strCategory}`}>
            {strCategory.toUpperCase()}
          </Link>
        </h2>
        <p>{strCategoryDescription.slice(0, 100)}...</p>
      </div>
      <figure>
        <img src={strCategoryThumb} />
      </figure>
    </div>
  );
};

export default FoodCategory;
