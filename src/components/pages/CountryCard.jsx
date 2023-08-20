import React from 'react'
import"./CountryCard.css"
// import {countries} from "../../data"

const CountryCard = (props) => {
  return (
    <div>
       <ul className='countries'>
       <li className="country">
      <div className="country__image">
        <img src={props.image} alt="" />
      </div>
      <div className="country__content">
        <h1 className="country__name">{props.name}</h1>
        <p className="country__genre">
          {props.genres.map((genre,index) => (
            <span key={index}>{genre}, </span>
          ))}
        </p>
        
      </div>
    </li>
    </ul>  
    </div>
  )
}

export default CountryCard;
