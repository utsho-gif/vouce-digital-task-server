const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());


//root
app.get("/", (req, res) => {
  res.send("Home");
});

//loginapi
app.post('/login', (req, res) => {
    const user = req.body;
    // console.log(user);
    const {email, password} = user;
    // const token = QpwL5tke4Pnpja7X4;
    if(email && password){
        res.send({token: "QpwL5tke4Pnpja7X4"})
    }
    else{
        res.send({error: "Missing Password"});
    }
})

app.listen(port, () => {
  console.log("Listening", port);
});
