const express = require("express");
const router = express.Router();

const controller = require("./../controllers/web.controller");

router.get("/",controller.home);

router.get("/create",controller.formCreate);
router.post("/create",controller.create);

router.get("/delete/:id",controller.delete);



module.exports = router; 