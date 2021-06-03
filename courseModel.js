const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const CourseSchema = new Schema({
  courseName: {
    type: String,
  },
  lecturer: {
    type: Array,
  },
  coursePoints: {
    type: Number
  },

}

)

const Course = mongoose.model("course", CourseSchema, "course");
// The first argument is the singular name of the collection your model is for. 
// Mongoose automatically looks for the plural, lowercased version of your model name. 

module.exports = Course