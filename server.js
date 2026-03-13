const express = require("express");

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));

let username = "";


app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
        <title>Welcome</title>
    </head>

    <body style="font-family:Arial;text-align:center;margin-top:100px">

        <h1>Welcome</h1>
        <p>Please enter your name to receive a greeting.</p>

        <form method="POST" action="/submit">
            <input type="text" name="name" placeholder="Enter your name" required
            style="padding:10px;width:200px"/>

            <br><br>

            <button type="submit" style="padding:10px 20px">
                Get Greeting
            </button>
        </form>

    </body>
    </html>
  `);
});



app.post("/submit", (req, res) => {
  username = req.body.name;
  res.redirect("/greeting");
});



app.get("/greeting", (req, res) => {
  res.send(`
    <html>
    <head>
        <title>Hello</title>
    </head>

    <body style="font-family:Arial;text-align:center;margin-top:100px">

        <h1>Hello, ${username}!</h1>

        <br>

        <a href="/">Go Back</a>

    </body>
    </html>
  `);
});


app.listen(port, () => {
  console.log("Server running at http://localhost:" + port);
});