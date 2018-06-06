var vehicles [
        motorbike:{
              minSeats: 1,
              maxSeats: 1,
              pricePerDay: 109,
              minDays: 1,
              maxDays: 5,
              fuelKm: 3.7
        },
        smallCar: {
              // seats: [1, 2],
              minSeats:1,
              maxSeats:2,
              pricePerDay: 129,
              minDays: 1,
              maxDays: 10,
              fuelKm: 8.5
        },
        largeCar: {
              // seats: [1, 2, 3, 4, 5] //Using this type of code would be based around for loops more
              minSeats:1, //this type of syntax will be based around if else statements more
              maxSeats:5,
              pricePerDay: 144,
              minDays:2,
              maxDays: 10,
              fuelKm:9.7
        },
        motorhome: {
              minSeats: 2,
              maxSeats: 6,
              pricePerDay: 200,
              minDays: 2,
              maxDays: 15,
              fuelKm: 17
        }
]
