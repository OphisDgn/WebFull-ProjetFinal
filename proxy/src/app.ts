import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import TokenCheck from "./TokenCheck";

const app = express();
const port = 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/api", (_, res) => {
  res.send("Hello API");
});

app.get("/api/hello", (_, res) => {
  res.send("Hello");
});

app.get("/api/.user", TokenCheck, (_, res) => {
  axios.get("http://nginx/api/hello").then((onfulfilled) => {
    res.send(onfulfilled.data);
  });
});

app.get('/api/admin', TokenCheck, (_, res) => {
  res.send('Hello Admin');
});

app.post('/api/check_role', TokenCheck, (_, res) => {
  res.send('Check Role');
});

app.post('/api/login_check', (req, res) => {
  axios.post("http://nginx/api/login_check", {username: req.body.username, password: req.body.password}).then((onfulfilled) => {
    res.send(onfulfilled.data);
  });
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
