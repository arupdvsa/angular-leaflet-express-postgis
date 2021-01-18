import express, {Router} from "express";
import BuildingsController from "../controllers/BuildingsController";

const router = Router();
const buildingsController = new BuildingsController();

router.get("/", buildingsController.get);
router.get("/properties", buildingsController.properties_get);
router.post("/properties", buildingsController.properties_add_post);
router.put("/properties/:building_id", buildingsController.properties_update_put);
router.delete("/properties/:building_id", buildingsController.properties_delete);

export default router;
