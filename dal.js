//data access layer
const users = require('./data')

function getUsers () {
  return users.users
}

function getUser (userId) {
  let chosenUser = {};
  for (var i = 0; i < users.users.length; i++) {
    if (users.users[i].id == userId) {
      chosenUser = users.users[i]
    }
  }
  console.log(chosenUser);
  return chosenUser;
}
getUser(3);
// function getUserJob (userJob) {
//   let jobs = {}
//   for (var i = 0; i < users.length; i++) {
//     if (users[i].job === userJob) {
//       jobs = users[i].job
//     }
//   }
// }
//
// function getCompany (userCompany) {
//   let company = {}
//   for (var i = 0; i < users.length; i++) {
//     if (users[i].company === userCompany) {
//       company = users[i].company
//     }
//   }
// }

module.exports = {
  getUsers: getUsers,
  getUser: getUser,
  // getUserJob: getUserJob,
  // getCompany: getCompany,
}
