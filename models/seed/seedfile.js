var mongoose = require('mongoose');

require('../all-models').toContext(global);

User.create([
  {
    'email': 'test@test.com',
    'password': '123dogsrule'
  }
])

  .then(() => {
    console.log("Seed complete!")
    mongoose.connection.close();
  });


