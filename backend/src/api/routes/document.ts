import { Router } from "express";
import { DocumentBL } from "../bl/DocumentBL";

const route = Router();

route.get("/:postId", async (req, res) => {
  try {
    const stream = await DocumentBL.getDoumentsByPost(
      Number(req.params.postId)
    );

    res.setHeader("Content-Type", "application/octet-stream");

    stream[0]
      .on("error", () => {
        res.status(404).send({ message: `File not found` });
      })
      .pipe(res);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

export default route;
