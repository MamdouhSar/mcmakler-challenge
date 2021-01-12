const faker = require('faker');
const fs = require('fs');

const STATUS_TYPES = ["Appointment_Set", "Property_Viewed", "Interested", "Offer_Accepted"];
const NUMBER_OF_APPLICATIONS = 25;
var data = [];

const getRandomStatus = function () {
	return STATUS_TYPES[Math.floor(Math.random() * STATUS_TYPES.length)];
};

for (var i = 0; i < NUMBER_OF_APPLICATIONS; i++) {
	var status_1 = getRandomStatus();
	var firstName = faker.name.firstName();
	var lastName = faker.name.lastName();
	data.push({
		id: i + 1,
		firstName: firstName,
		lastName: lastName,
		email: firstName.toLowerCase() + "_" + lastName.toLowerCase() + "@gmail.com",
		status: status_1,
		updateDate: faker.date.recent(10),
		phone: faker.phone.phoneNumber("+49 ### ### #####"),
		bid: status_1 === "Property_Viewed" ? parseInt(faker.finance.amount(150000, 400000)) : undefined
	});
}

const databaseString = JSON.stringify({applications: data});
 
fs.writeFile("./server/db.json", databaseString, 'utf8', function (err) {
	if (err) {
		console.log("An error occured while creating the database");
		return console.log(err);
	}

	console.log("Datebase created!");
});

