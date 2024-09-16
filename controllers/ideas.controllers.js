/*
LOGIC TO CREATE CONTROLLERS
*/

const ideas = require('../models/ideas.model')

//RETURN THE LIST OF IDEAS
id = 3

exports.getAllideas = (req,res)=>{
    //Reading all the ideas 

    //Return all the ideas
    res.status(200).send(ideas)
}
exports.getSelectedIdeas = (req,res)=>{
    idea_id = req.params.id 
    if(ideas[idea_id]){
        res.status(200).send(ideas[idea_id])
    }
    else{
        res.status(404).send("NO not available")
    }
}
exports.createIdea = (req,res) =>{
    idea_object = req.body
    id++
    idea_object['id'] = id
    ideas[id] = idea_object
    res.status(201).send(idea_object)
}

exports.updateIdea = (req,res) =>{
    idea_id = req.params.id 
    if (ideas[idea_id]) {
        idea_object = req.body
        ideas[idea_id] = idea_object
        res.status(200).send(idea_object)
    }
    else{
        res.status(404).send({
            message : "ID not found"
        })
    }
}
exports.deleteIdea = (req,res) =>{
    idea_id = req.params.id
    if(idea_id){
        delete ideas[idea_id]
        res.status(200).send({
            message : `Your Data for id ${idea_id} has been deleted`
        })
    }else{
        res.status(404).send({
            message : "Id Not Present"
        })
    }
}
