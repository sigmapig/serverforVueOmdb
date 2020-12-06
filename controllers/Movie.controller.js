const db = require("../models");
const Movie = db.movies;
const Op = db.Sequelize.Op;

// Create and Save a new Omdb
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Title) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
        return;
    }
  // Create a Movie
    const movie = {
        Title : req.body.Title,
        Year : req.body.Year,
        Rated : req.body.Rated,
        Released :  req.body.Released,
        Runtime : req.body.Runtime,
        Genre : req.body.Genre,
        Director : req.body.Director,
        Writer : req.body.Writer,
        Actors : req.body.Actors,
        Plot : req.body.Plot,
        Language : req.body.Language,
        Country : req.body.Country,
        Awards : req.body.Awards,
        Poster : req.body.Poster,
        RatingsID : req.body.RatingsID,
        Metascore : req.body.Metascore,
        imdbRating : req.body.imdbRating,
        imdbVotes : req.body.imdbVotes,
        imdbID : req.body.imdbID,
        Type : req.body.Type,
        DVD : req.body.DVD,
        BoxOffice : req.body.BoxOffice,
        Production : req.body.Production,
        Website : req.body.Website,
    };

  Movie.create(movie)
        .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Movoie."
        });
    });
};
exports.findAll = (req, res) => {
    const title = req.query.Title;
    var condition = Title ? { Title: { [Op.like]: `%${title}%` } } : null;

    Movie.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving tutorials."
        });
    });
};
exports.findOne = (req, res) => {
    const id = req.params.id
    Movie.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Tutorial with id=" + id
        });
    });
};
exports.update = (req, res) => {
    const id = req.params.id;

    Movie.update(req.body, {
        where: { id: id }
    })
    .then(num => {
    if (num == 1) {
        res.send({
            message: "Movie was updated successfully."
        });
    } else {
        res.send({
            message: `Cannot update Movie with id=${id}. Maybe Movie was not found or req.body is empty!`
        });
    }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Movie with id=" + id
        });
    });
};
exports.delete = (req, res) => {
    const id = req.params.id;

    Movie.destroy({
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
                message: "Movie was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`
            });
        }
        })
        .catch(err => {
                res.status(500).send({
                    message: "Could not delete Movie with id=" + id
                });
        });
    };
exports.deleteAll = (req, res) => {
    Movie.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Movies were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while removing all Movies."
        });
    });
};
exports.findAllCondi = (req, res) => {
    Movie.findAll({ where: { published: true } })
    .then(data => {
    res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Movies."
        });
    });
};