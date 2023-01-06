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
  res.send("Hello API");
});

// ------------------------------------------
// ------------------ User ------------------
// ------------------------------------------

app.get("/api/.user/user", TokenCheck, (_, res) => {
  axios.get("http://nginx/api/user",{
    headers: {
      'Authorization': _.headers.authorization
    }})
  .then((onfulfilled) => {
    res.send(onfulfilled.data);
  })
  .catch((onrejected) => {
    console.log(onrejected.response.data)
    res.send(onrejected.response.data);
  });
});

app.get('/api/.user/admin', TokenCheck, (_, res) => {
  axios.get("http://nginx/api/admin",{
    headers: {
      'Authorization': _.headers.authorization
    }})
  .then((onfulfilled) => {
    res.send(onfulfilled.data);
  })
  .catch((onrejected) => {
    console.log(onrejected.response.data)
    res.send(onrejected.response.data);
  });
});

app.post('/api/.user/check_role', TokenCheck, (_, res) => {
  axios.post("http://nginx/api/check_role", {  role: _.body.role }, {
  headers: {
    'Authorization': _.headers.authorization
  }})
  .then((onfulfilled) => {
    res.send(onfulfilled.data);
  })
  .catch((onrejected) => {
    console.log(onrejected.response.data)
    res.send(onrejected.response.data);
  });
});

app.post('/api/.user/login_check', (_, res) => {
  axios.post("http://nginx/api/login_check", {username: _.body.username, password: _.body.password})
  .then((onfulfilled) => {
    res.send(onfulfilled.data);
  })
  .catch((onrejected) => {
    console.log(onrejected.response.data)
    res.send(onrejected.response.data);
  });
});

// ------------------------------------------
// -------------- Inscription ---------------
// ------------------------------------------

app.post('/api/inscription', (_, res) => {
  axios.post("http://nginx/api/inscription/", {email: _.body.email, phone: _.body.phone, lastname: _.body.lastname, firstname: _.body.firstname, nationality: _.body.nationality})
  .then((onfulfilled) => {
    res.send(onfulfilled.data);
  })
  .catch((onrejected) => {
    console.log(onrejected.response.data)
    res.send(onrejected.response.data);
  });
});

app.post('/api/inscription/valide-user/:id', TokenCheck, (req, res) => {
  console.log("req.params.id", req.params.id);
  console.log(req.headers.authorization);
  axios.post("http://nginx/api/inscription/valide-user/"+ req.params.id, {
    headers: {
      'Authorization': req.headers.authorization
    }})
  .then((onfulfilled) => {
    res.send(onfulfilled.data);
  })
  .catch((onrejected) => {
    console.log(onrejected.response.data)
    res.send(onrejected.response.data);
  });
});

// ------------------------------------------
// ----------------- Users ------------------
// ------------------------------------------

app.get('/api/users', TokenCheck, (_, res) => {
  axios.get("http://nginx/api/users",{
    headers: {
      'Authorization': _.headers.authorization
    }})
  .then((onfulfilled) => {
    res.send(onfulfilled.data);
  })
  .catch((onrejected) => {
    console.log(onrejected.response.data)
    res.send(onrejected.response.data);
  });
});

app.get('/api/future-users', TokenCheck, (_, res) => {
  axios.get("http://nginx/api/future-users",{
    headers: {
      'Authorization': _.headers.authorization
    }})
  .then((onfulfilled) => {
    res.send(onfulfilled.data);
  })
  .catch((onrejected) => {
    console.log(onrejected.response.data)
    res.send(onrejected.response.data);
  });
});


// ------------------------------------------
// --------- Backoffice Future User ---------
// ------------------------------------------


app.get('/api/backoffice', TokenCheck, (_, res) => {
  axios.get("http://nginx/api/backoffice",{
    headers: {
      'Authorization': _.headers.authorization
    }})
  .then((onfulfilled) => {
    res.send(onfulfilled.data);
  })
  .catch((onrejected) => {
    console.log(onrejected.response.data)
    res.send(onrejected.response.data);
  });
});

app.post('/api/backoffice/new', TokenCheck, (_, res) => {
  axios.post("http://nginx/api/backoffice/new", {email: _.body.email, phone: _.body.phone, lastname: _.body.lastname, firstname: _.body.firstname, nationality: _.body.nationality}, {
    headers: {
      'Authorization': _.headers.authorization
    }})
  .then((onfulfilled) => {
    res.send(onfulfilled.data);
  })
  .catch((onrejected) => {
    console.log(onrejected.response.data)
    res.send(onrejected.response.data);
  });
});


app.get('/api/backoffice/:id', TokenCheck, (_, res) => {
  axios.get("http://nginx/api/backoffice/"+ _.params.id, {
    headers: {
      'Authorization': _.headers.authorization
    }})
  .then((onfulfilled) => {
    res.send(onfulfilled.data);
  })
  .catch((onrejected) => {
    console.log(onrejected.response.data)
    res.send(onrejected.response.data);
  });
});

app.delete('/api/backoffice/delete/:id', TokenCheck, (_, res) => {
  axios.delete("http://nginx/api/backoffice/delete/" + _.params.id, {
    headers: {
      'Authorization': _.headers.authorization
    }})
  .then((onfulfilled) => {
    res.send(onfulfilled.data);
  })
  .catch((onrejected) => {
    console.log(onrejected.response.data)
    res.send(onrejected.response.data);
  });
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
