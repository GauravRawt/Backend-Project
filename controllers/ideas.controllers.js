/*
LOGIC TO CREATE CONTROLLERS
*/

const ideas = require('../models/ideas.model')

//RETURN THE LIST OF IDEAS

exports.getAllideas = (req,res)=>{
    //Reading all the ideas 

    //Return all the ideas
    res.status(200).send(ideas)
}