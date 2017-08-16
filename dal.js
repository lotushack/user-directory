//data access layer
const users = require('./data')

function getUsers () {
  return users
}

function getUser (userID) {
  let chosenUser = {}
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      chosenUser = users[i]
    }
  }
  return chosenUser
}

function getUserJob (userJob) {
  let jobs = {}
  for (var i = 0; i < users.length; i++) {
    if (users[i].job === userJob) {
      jobs = users[i].job
    }
  }
}

function getCompany (userCompany) {
  let company = {}
  for (var i = 0; i < users.length; i++) {
    if (users[i].company === userCompany) {
      company = users[i].company
    // }else{
    //   return "Available for hire"
    }
  }
}

module.exports = {
  getUsers: getUsers,
  getUser: getUser,
  getUserJob: getUserJob,
  getCompany: getCompany,
}
