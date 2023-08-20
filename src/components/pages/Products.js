import { useState } from "react";
import "../../App.css";
import "./Products.css";
import { countries } from "../../data";
import Putton from "./Putton";
import CountryCard from "./CountryCard";
const Products = (props) => {
  const categories = [
    ...new Set(countries.flatMap((country) => country.genres)),
  ];

  const [state, setState] = useState(countries);

  // const getGenre = (genre) => {
  //   const allCountries = countries;

  //   if (genre === "all") {
  //     setState(allCountries);
  //   } else {
  //     const newState = allCountries.filter((country) =>
  //       country.genres.includes(genre)
  //     );
  //     setState(newState);
  //   }
  //   console.log(countries);
  // };

  // console.log(categories);

  // console.log(categories);

  const GetallGenre = (genre) => {
    const allCountries = countries;

    setState(allCountries);
  };

  const GetGenre = (genre) => {
    console.log(genre);
    // console.log(countries);

    const newState = countries.filter((countries) =>
      countries.genres.includes(genre)
    );

    setState(newState);
  };

  return (
    <div>
      <div className="categories">
        <Putton onClick={GetallGenre}>All</Putton>
        {categories.map((category, index) => (
          <Putton key={index} onClick={GetGenre} genre={category}>
            {category}
          </Putton>
        ))}
      </div>

      <ul className="countries">
        {state.map((country) => (
          <CountryCard
            name={country.name}
            genres={country.genres}
            image={country.image}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;