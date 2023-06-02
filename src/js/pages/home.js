import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import CardPeople from "../component/cardPeople.jsx";
import CardPlanet from "../component/cardPlanet.jsx";
import CardVehicle from "../component/cardVehicle.jsx";


export const Home = () => {
  return (
    <>
    <div className="bg-white">
      <br></br> <br></br>
      <h1 className="text-danger ps-5 mb-2">Characters</h1>
      <CardPeople />
      <h1 className="text-danger  ps-5 mt-2 mb-2">Planets</h1>
      <CardPlanet />
      <h1 className="text-danger ps-5 mt-2 mb-2">Vechicles</h1>
      <CardVehicle />
      </div>
    </>

  );
};