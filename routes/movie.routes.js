module.exports = app => {
    const movies = require("../controllers/Movie.controller");
  
    var router = require("express").Router();
  
    // Create a new movie
    router.post("/", movies.create);
  
    // Retrieve all movies
    router.get("/", movies.findAll);
  
    // Retrieve all with condition movies
    router.get("/show", movies.findAllCondi);
  
    // Retrieve a single movie with id
    router.get("/:id", movies.findOne);
  
    // Update a movie with id
    router.put("/:id", movies.update);
  
    // Delete a movie with id
    router.delete("/:id", movies.delete);
  
    // Delete all movies
    router.delete("/", movies.deleteAll);
  
    app.use('/api/movies', router);
  };