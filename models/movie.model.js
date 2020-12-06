module.exports = (sequelize, Sequelize) => {
    const Movie= sequelize.define("movies", {
      Title: { /*"Captain Marvel"*/
        type: Sequelize.STRING
      },
      Year: { /*"2019"*/
        type: Sequelize.STRING
      },
      Rated: { /* "PG-13" */
        type: Sequelize.STRING
      },
      Released: { /*"08 Mar 2019"*/
        type: Sequelize.STRING
      },
      Runtime: { /*"123 min"*/
        type: Sequelize.STRING
      },
      Genre: { /*"Action, Adventure, Sci-Fi"*/
        type: Sequelize.TEXT
      },
      Director: { /*"Anna Boden, Ryan Fleck"*/
        type: Sequelize.TEXT
      },
      Writer: { /*"Anna Boden (screenplay by), Ryan Fleck (screenplay by), Geneva Robertson-Dworet (screenplay by), Nicole Perlman (story by), Meg LeFauve (story by), Anna Boden (story by), Ryan Fleck (story by), Geneva Robertson-Dworet (story by)"*/
        type: Sequelize.TEXT
      },
      Actors: { /*"Brie Larson, Samuel L. Jackson, Ben Mendelsohn, Jude Law"*/
        type: Sequelize.TEXT
      },
      Plot: { /*"Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races."*/
        type: Sequelize.TEXT
      },
      Language: { /*"English"*/
        type: Sequelize.STRING
      },
      Country: { /*"USA, Australia"*/
        type: Sequelize.STRING
      },
      Awards: { /*"7 wins & 47 nominations."*/
        type: Sequelize.TEXT
      },
      Poster: { /*"https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg."*/
        type: Sequelize.TEXT
      },
      RatingsID: { /*"[{Source: "Internet Movie Database",Value: "6.9/10"},{Source: "Rotten Tomatoes",Value: "79%"},{Source: "Metacritic",Value: "64/100"}],"*/
        type: Sequelize.INTEGER
      },
      Metascore: { /*"64"*/
        type: Sequelize.INTEGER
      },
      imdbRating: { /*"6.9"*/
        type: Sequelize.FLOAT
      },
      imdbVotes: { /*"429,631"*/
        type: Sequelize.STRING
      },
      imdbID: { /*"tt4154664"*/
        type: Sequelize.STRING
      },
      Type: { /*"movie"*/
        type: Sequelize.STRING
      }, 
      DVD: { /*"N/A"*/
        type: Sequelize.STRING
      },
      BoxOffice: { /*"N/A"*/
        type: Sequelize.STRING
      },
      Production: { /*"2019"*/
        type: Sequelize.STRING
      },
      Website: { /*"N/A"*/
        type: Sequelize.STRING
      },
    //   Response: { /*"TRUE"*/ 
    //     type: Sequelize.STRING
    //   },
    });
    return Movie;
  };