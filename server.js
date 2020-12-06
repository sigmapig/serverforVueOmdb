// server/server/js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// listen on the port
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});
// app.use(bodyParser.json());
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));

// Set up Auth0 configurationgit remote add origin
const authConfig = {
    domain: process.env.VUE_APP_AUTH0_DOMAIN_APIKEY,
    audience: process.env.VUE_APP_AUTH0_DOMAIN_APIKEY
};

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//test posted here
// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
// })


// Create middleware to validate the JWT using express-jwt
const checkJwt = jwt({
  // Provide a signing key based on the key identifier in the header and the signing keys provided by your Auth0 JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  // Validate the audience (Identifier) and the issuer (Domain).
    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithms: ["RS256"]
});

// mock data to send to our frontend
let events = 
{   "Title":"Captain Marvel",
    "Year":"2019",
    "Rated":"PG-13",
    "Released":"08 Mar 2019",
    "Runtime":"123 min",
    "Genre":"Action, Adventure, Sci-Fi",
    "Director":"Anna Boden, Ryan Fleck",
    "Writer":"Anna Boden (screenplay by), Ryan Fleck (screenplay by), Geneva Robertson-Dworet (screenplay by), Nicole Perlman (story by), Meg LeFauve (story by), Anna Boden (story by), Ryan Fleck (story by), Geneva Robertson-Dworet (story by)",
    "Actors":"Brie Larson, Samuel L. Jackson, Ben Mendelsohn, Jude Law",
    "Plot":"Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
    "Language":"English",
    "Country":"USA, Australia",
    "Awards":"7 wins & 47 nominations.",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",
    "Ratings":[{"Source":"Internet Movie Database",
                "Value":"6.9/10"},
                {"Source":"Rotten Tomatoes",
                "Value":"79%"},
                {"Source":"Metacritic",
                "Value":"64/100"}],
    "Metascore":"64",
    "imdbRating":"6.9",
    "imdbVotes":"429,631",
    "imdbID":"tt4154664",
    "Type":"movie",
    "DVD":"N/A",
    "BoxOffice":"N/A",
    "Production":"Marvel Studios",
    "Website":"N/A",
    "Response":"True"
}
// app.get('/api/omdb', (req, res ) =>{
//     const omdb = {
//         "Title": "Guardians of the Galaxy Vol. 2",
//         "Year": "2017",
//         "Rated": "PG-13",
//         "Released": "05 May 2017",
//         "Runtime": "136 min",
//         "Genre": "Action, Adventure, Comedy, Sci-Fi",
//         "Director": "James Gunn",
//         "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
//         "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
//         "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
//         "Language": "English",
//         "Country": "USA",
//         "Awards": "Nominated for 1 Oscar. Another 15 wins & 56 nominations.",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
//         "Ratings": [{
//                 "Source": "Internet Movie Database",
//                 "Value": "7.6/10"
//             },
//             {
//                 "Source": "Rotten Tomatoes",
//                 "Value": "85%"
//             },
//             {
//                 "Source": "Metacritic",
//                 "Value": "67/100"
//             }
//         ],
//         "Metascore": "67",
//         "imdbRating": "7.6",
//         "imdbVotes": "556,178",
//         "imdbID": "tt3896198",
//         "Type": "movie",
//         "DVD": "N/A",
//         "BoxOffice": "N/A",
//         "Production": "Marvel Studios, Walt Disney Pictures",
//         "Website": "N/A",
//         "Response": "True"
//     };

//     res .json(omdb);
// }),
// get all events
app.get("/api/omdb", (req, res) => {
    res.send(events).json;
});

// app.get("/events/:id", checkJwt, (req, res) => {
//     const id = Number(req.params.id);
//     const event = events.find(event => event.id === id);
//     res.send(event);
//   });
require("./routes/movie.routes.js")(app);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
