const { Sequelize } = require("sequelize")

let usersData =
    [
        {
            "name": "Pak Lurah Joko",
            "email": "lurahjoko@gmail.com",
            "phoneNumber": "0898788584838",
            "location": Sequelize.fn(
                'ST_GeomFromText',
                'POINT(107.5904275402039 -6.9439994342171225)'
            )
        }
    ]

module.exports = usersData