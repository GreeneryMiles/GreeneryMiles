import express from "express";
import { getCoordinatesByAddress, getDistanceByTwoCoordinates, getHouseInfo } from "../controller/apis.js";

const router = express.Router();
router.post('/coordinates', getCoordinatesByAddress);
router.post('/distance', getDistanceByTwoCoordinates);
router.get('/houses', getHouseInfo);

export default router;