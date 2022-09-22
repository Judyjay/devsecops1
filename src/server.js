const express = require("express")
const helloRoute =  require("./routes/hello")

const application = express()
const serverPort = 3010


application.use("/hello", helloRoute)

application.listen(serverPort, () =>{
    console.log(`Application server running on port ${serverPort}\nPress Ctrl+C to exit`)
})