import { Router } from "express";
import { PatientBL } from "../bl/PatientBL";

const route = Router();

route.get("/", async (req, res) => {
  try {
    const patients = await PatientBL.getAll(req.currentUser);
    res.json(patients);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

export default route;
