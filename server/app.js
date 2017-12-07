const app 		 = require('express')()
const bodyParser = require('body-parser')
const cors       = require('cors')
const mongoose   = require('mongoose')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb://AhmadNizar:cBnmgEXaknFbpUNN@ahmadnizardb-shard-00-00-scdlc.mongodb.net:27017,ahmadnizardb-shard-00-01-scdlc.mongodb.net:27017,ahmadnizardb-shard-00-02-scdlc.mongodb.net:27017/dbtodopakhaji?ssl=true&replicaSet=AhmadNizarDB-shard-0&authSource=admin', (err) => {
  if(!err) {
    console.log('DATABASE TERHUBUNG');
  } else {
    console.log('TIDAK TERHUBUNG DATABASE');
  }
})

const User = require('./routes/userRoute')
const Task = require('./routes/listRoute')

app.use('/api/users', User)
app.use('/api/tasks', Task)

app.listen(process.env.PORT || 3000, () => {
	console.log('Jalan tong')
})