const mongoose = require("mongoose");
let Schema = mongoose.Schema;

// sample data
// {
//     "_id": {
//         "$oid": "60a5cdb14c45a504f5282df0"
//     },
//     "name": "ali1",
//     "dob": "1970-01-01",
//     "courses": ["A101", "B101"],
//     "results": [{
//         "course": "A101",
//         "result": "B",
//         "dateTaken": "1970-01-01"
//     }, {
//         "course": "B101",
//         "result": "A",
//         "dateTaken": "1970-01-01"
//     }],
//     "address": {
//         "street": "jalan tsh"
//     }
// }

const StudentSchema= new Schema({
	name: {
		type: String,
	},
	dob: {
		type: String,
	},
	courses: {
		type: Array
	},
	results:[
	{
		course: {
			type: String
		},
		result: {
			type: String
		},		
		dateTaken: {
			type: String
		},
	}
	],
	address:{
		street:{
			type: String
		}
	}
}

	)

const Student = mongoose.model("student", StudentSchema, "student");
// The first argument is the singular name of the collection your model is for. 
// Mongoose automatically looks for the plural, lowercased version of your model name. 

module.exports = Student;