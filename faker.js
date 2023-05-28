const faker = require('faker');
const lodash = require('lodash');

const users = lodash.times(10, () => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
}));

const sortedUsers = lodash.sortBy(users, 'name');

console.log('Sorted array of users:');
console.log(sortedUsers);
