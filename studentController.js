const StudentModel = require("./studentModel") //Schema

exports.getAllStudent = async (req, res) => {
	let returningFields = 'name dob'
	
	// req.query pass the query parameter in URL
	// /students?fileds=name,dob

	// if (req.query.fields) {
	// 	let regex = /,/g
	// 	returningFields = req.query.fields.replace(regex, ' ')
	// }



	const x = await StudentModel.find({}, returningFields).sort({ id: 1 })
	// find: find all 
	// sort : -1 is descending(new to old/ other sequences), 1 is ascending 
	// sort ( {attribute you wish to sort: sequense} )  

	try {
		if (x.length > 0) {
			// status 200 indicates the request is received, processed
			// can simply replace with res.send(x) 
			res.status(200).send({ data: x });
		}

		else
			res.status(200).send({ msg: `No data.` });
	}

	catch (err) {
		// status 500 indicates there is internal server error/
		res.status(500).send({ msg: `Error while retrieving students: ${err.message}.`, });
	}
};


exports.getOneStudentByName= async (req, res)=>{
	let returningField= 'name result'

	const oneStudent= await StudentModel.findByOneAndUpdate({name: req.params.name}, returningField)

	try{
		res.send(oneStudent)

	}

	catch(err){
		console.log(err)
	}

}
