const app 		 = require('express')()
const bodyParser = require('body-parser')
const cors       = require('cors')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

const User = require('./routes/userRoute')
const Task = require('./routes/listRoute')

app.use('/api/users', User)
app.use('/api/tasks', Task)

app.listen(process.env.PORT || 3000, () => {
	console.log('Jalan tong')
})