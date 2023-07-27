import CategoryMeal from "@/components/UI/CategoryMeal";
import React from "react";

export const getByCategory = async (category) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    {
      cache: "no-store", // for server side rendaring
    }
  );

  const result = await res.json();

  return result.meals;
};

const page = async ({ params, searchParams }) => {
  const catData = await getByCategory(params.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {catData.map((catWiseData) => (
        <CategoryMeal
          key={catWiseData.idMeal}
          catWiseData={catWiseData}
        ></CategoryMeal>
      ))}
    </div>
  );
};

export default page;
