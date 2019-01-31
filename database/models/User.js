var mongoose=require('mongoose')
var bcrypt=require('bcrypt')

var userSchema=new mongoose.Schema({
	username:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true,
		unique:true
	},
	password:{
		type:String,
		required:true
	}
})