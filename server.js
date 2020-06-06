const express = require("express")
const app = express()
const port = 8080
const data = require("./data.json")

app.use(express.static(__dirname + "/public"))

app.get("/cities", (req, res) => res.send(data))

app.listen(port, () => console.log(`Server listening at port:${port}`))
