const router = require("express").Router();
const TvController = require("../controllers/tvController");

router
	.route("/")
	.get(TvController.getAll)
	.post(TvController.create);

router
	.route("/:TvId")
	.get(TvController.getById)
	.patch(TvController.update)
	.delete(TvController.delete);

module.exports = router;
