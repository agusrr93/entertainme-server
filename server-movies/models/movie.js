const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MovieSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			minlength:1
		},
		overview: {
			type: String,
			required: true,
			unique: true,
			minlength:1
		},
		poster_path: {
			type: String,
			required: true
		},
		popularity:{
			type: Number,
			required: true
		},
		tags:[{
			type: Schema.Types.ObjectId,
			ref:"Tag"
		}]
	},
	{
		timestamps: {
			createdAt: "createdAt",
			updatedAt: "updatedAt"
		}
	}
);

module.exports = mongoose.model("Movie", MovieSchema);
