const express = require("express")

const productRouter = require("./routes/productos.js");

const app = express();
const PORT = process.env.PORT || 8080


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/submit", express.static('views'))
app.use("/api/productos", productRouter)


app.listen(8080, () => {
  console.log('Runing on PORT ' + PORT)
}).on('error', console.error)