const express = require('express');
const app = express();
const ClockRoutes = require('./routes/Clock');
PORT = process.env.PORT || 3000;

//parse routes to json object
app.use(express.json());
const db = require('./models');


//routes
app.use('/clock',ClockRoutes);

db.sequelize.sync().then(()=>{
    app.listen(PORT, ()=> console.log(`listen on port ${PORT}`));
});
