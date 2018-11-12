const router = require("express").Router();
const movieController = require("../controllers/movieController");

router
	.route("/")
	.get(movieController.getAll)
	.post(movieController.create);

router
	.route("/:TvId")
	.get(movieController.getById)
	.patch(movieController.update)
	.delete(movieController.delete);

module.exports = router;
