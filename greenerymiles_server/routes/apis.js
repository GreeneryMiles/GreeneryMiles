import express from "express";
import { getCoordinatesByAddress, getDistanceByTwoCoordinates } from "../controller/apis.js";

const router = express.Router();
router.post('/coordinates', getCoordinatesByAddress);
router.post('/distance', getDistanceByTwoCoordinates);


export default router;