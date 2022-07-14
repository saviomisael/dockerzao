const express = require("express")
const app = express()

const controller = require("./controller/helloController")

const PORT = 3000

app.get('/', controller.get)

app.listen(PORT, () => {
    console.log(`A aplicação está rodando na porta ${PORT}`)
})