import FoodCategory from "../../../components/UI/FoodCategory";

export const foodCat = async () => {
  const foodCatData = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
    {
      next: {
        revalidate: 5,
      },
    }
  );

  const result = await foodCatData.json();
  return result.categories;
};

const page = async () => {
  const data = await foodCat();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-4 mb-6">
      {data?.map((foodCat) => (
        <FoodCategory key={foodCat.idCategory} foodCat={foodCat}></FoodCategory>
      ))}
    </div>
  );
};

export default page;
