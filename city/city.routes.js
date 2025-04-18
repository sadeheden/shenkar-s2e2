import { getCities, getCityById,addCity, updateCity, deleteCity } from "./city.controller.js";
import { Router } from "express";

const router = Router();

router
    .get('/', getCities)
    .get('/:id', getCityById)
    .post('/', addCity)
    .put('/:id', updateCity)
    .delete('/:id', deleteCity);

    export default router; 
