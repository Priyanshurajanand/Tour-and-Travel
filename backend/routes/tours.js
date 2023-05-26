import express from "express";
import { createTour , updateTour , deleteTour , getAllTour , getSingleTour, getTourBySearch, getFeaturedTour, getTourCount
 } from "../controllers/tourController.js";
 import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()

//Create new tour
router.post("/", verifyAdmin ,createTour )
//update tour
router.put("/:id" , verifyAdmin ,updateTour )
//delete tour
router.delete("/:id" , verifyAdmin ,deleteTour )
//get single tour
router.get("/:id" ,getSingleTour )
//get all tour
router.get("/" ,getAllTour )
//get all tour by search
router.get("/search/getTourBySearch" ,getTourBySearch)
//get featured tour
router.get("/search/getFeaturedTours" ,getFeaturedTour)
router.get("/search/getTourCount" ,getTourCount)

export default router;