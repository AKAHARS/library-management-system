const express = require("express");
const app = express();

const Port = 4000;

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).json({
    message: "Home Page"
    })

})
// app.all('/*', (req, res) => {
//     res.status(500).json({
//     message: "Invalid URL"
//     })
// });

app.listen(Port, () => {
    console.log(`Server is running at http://localhost:${Port}`);
})