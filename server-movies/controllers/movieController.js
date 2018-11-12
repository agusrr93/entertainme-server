const Tv = require("../models/movie");
const ObjectIdHelper = require("../helpers/objectIdhelper");

class MovieController {
	constructor() {}

	static create(req, res) {
		Tv.create({
			title: req.body.title,
			overview: req.body.overview,
			poster_path: req.body.poster_path,
			popularity: req.body.popularity
		})
			.then(data => {
				res
					.status(201)
					.json({ info: "movie created successfully", data: data });
			})
			.catch(err => {
				res.status(400).json({
					error: err.message
				});
			});
	}

	static getAll(req, res) {
		Tv.find({})
			.populate("tag")
			.then(data => {
				res.status(200).json({ info: "movies found successfully", data: data });
			})
			.catch(err => {
				res.status(500).json(err);
			});
	}

	static getById(req, res) {
		Tv.findById(req.params.TvId)
			.then(data => {
				res.status(200).json({ info: "movie found successfully", data });
			})
			.catch(err => {
				res.status(500).json(err);
			});
	}

	static update(req, res) {
		Tv.findByIdAndUpdate(
			req.params.TvId,
			{
				title: req.body.title,
				overview: req.body.overview,
				poster_path: req.body.poster_path,
				popularity: req.body.popularity
			},
			{
				new:true
			}
		)
			.then(data => {
				res.status(200).json({ info: "movie updated successfully", data });
			})
			.catch(err => {
				res.status(500).json(err);
			});
	}

	static delete(req, res) {
		Tv.findByIdAndRemove(req.params.TvId)
			.then(data => {
				res.status(200).json({ info: "movie delete successfully", data });
			})
			.catch(err => {
				res.status(500).json(err);
			});
	}
}

module.exports = MovieController;
