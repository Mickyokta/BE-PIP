const { Sequelize } = require("sequelize")

let eventsData =
    [
        {
            "name": "Top Kampung Catur",
            "description": "Perlombaan catur tahunan yang rutin diadakan dan dianggap sebagai tradisi untuk mempererat hubungan antar warga.",
            "image": "https://i2.wp.com/sanantonioreport.org/wp-content/uploads/2020/01/ScottBall_san-antonio-chess-tournament-dreamweek-dream-week-education-competition-1-18-2020-3.jpg?fit=2040%2C1360",
            "startDate": new Date("2023-02-10T14:30:00Z"),
            "endDate": new Date("2023-02-11T14:30:00Z"),
            "location": Sequelize.fn(
                'ST_GeomFromText',
                'POINT(107.5904275402039 -6.9439994342171225)'
            ),
            "status": "Active",
            "userId": 1
        },
    ]


module.exports = eventsData