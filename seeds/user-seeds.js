const { User } = require('../models');

const userData = [
    {
        username: "monte_burr",
        twitter: "mb22",
        github: "montb",
        email: "monte_b@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "matt_b",
        twitter: "mathewb",
        github: "mathewb",
        email: "mathew_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "lizzie",
        twitter: "lizz",
        github: "lizzb",
        email: "lizzzz@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "lee_n",
        twitter: "leenorris",
        github: "leenorris",
        email: "lee_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "priya_r",
        twitter: "priyaravi23",
        github: "priyaravi23",
        email: "priya_r@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "pooja",
        twitter: "pooja_w",
        github: "pooja",
        email: "pooja@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;