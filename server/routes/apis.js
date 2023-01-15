import express from "express";
import { getCoordinatesByAddress, getDistanceByTwoCoordinates, getHouseInfo, getDistanceByTwoAddress } from "../controller/apis.js";

const router = express.Router();
router.post('/coordinates', getCoordinatesByAddress);
router.post('/distance_cord', getDistanceByTwoCoordinates);
router.get('/houses', getHouseInfo);
router.post('/distance_addr', getDistanceByTwoAddress);

export default router;