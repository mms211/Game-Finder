var mongoose = require('mongoose');

require('../all-models').toContext(global);

User.create([
  {
    'email': 'test@test.com',
    'password': '123dogsrule'
  }
]).then(() => {
  console.log("Seed complete!")
  mongoose.connection.close();
});

Post.create([
  {
    postType: 'online',
    user: 'test@test.com',
    title: 'Want to play a game?',
    body: 'Looking for people who want to play a game!'
  }
]).then(() => {
  console.log("Seed complete!")
  mongoose.connection.close();
});


