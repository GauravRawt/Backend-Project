/*
Route For GET 127.0.0.1:8000/ideaApp/api/v1/ideas
 */
const idea_controller = require("../controllers/ideas.controllers")

module.exports = (app) =>{
    app.get('/ideaApp/api/v1/ideas',idea_controller.getAllideas)

    app.get('/ideaApp/api/v1/ideas/:id',idea_controller.getSelectedIdeas)

    app.post('/ideaApp/api/v1/ideas',idea_controller.createIdea)

}