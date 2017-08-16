const express = require('express');
const app = express();
const mustacheEx = require('mustache-express');
const userDal = require('./dal');

// Resgister '.mustache' extension w/ mustache-express
app.engine('mustache', mustacheEx());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
// routes: callbacks to get app executed
app.get('/users', function (request, response) {
  const users = userDal.getUsers()
  console.log(users);
  response.render('index', users)
})

app.get('/users/:id', function (request, response){
  const chosenUser = userDal.getUser(request.params.id)
  if (chosenUser.id){
    response.render('userDetail', chosenUser)
  }else{
    response.send('NO USERS!')
  }
})


app.set('port', 3000)

app.listen(app.get('port'), function(){

})
