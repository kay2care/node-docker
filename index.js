const express = require("express")

const app = express()
app.get("/", (req, res) => {
    res.send("<h3>Express Demo deployed on Docker</h3>")
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))