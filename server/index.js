import express from 'express'
import bodyParser from 'body-parser'
import {} from 'dotenv/config'

const app = express()

const port = process.env.PORT || 8000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	return res.end('Api working')
})

app.listen(port, () => {
	console.log(process.env.PORT)

	console.log(`App Server Listening at ${port}`)
})
