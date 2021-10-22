// import package
const express = require("express");

// initialize package
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Oh ho, hello world!");
});

const users = [
  {
    id: 1,
    name: "Md. Rokibul Hasan",
    email: "Hasan.webappsdeveloper@gmail.com",
    phone: "01763251119",
  },
  {
    id: 2,
    name: "Mehedi Hasan",
    email: "Mehedi.webappsdeveloper@gmail.com",
    phone: "01763251119",
  },
  {
    id: 3,
    name: "Zubair Ahmed",
    email: "Zubair.webappsdeveloper@gmail.com",
    phone: "01763251119",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});



app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    res.send(users[userId])
});



// listening method
app.listen(port, () => {
  console.log("listening from port", 3000);
});
