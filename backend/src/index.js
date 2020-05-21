const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors(/* in production --> add site url (origin: "url") */));
app.use(express.json());
app.use(routes);

app.listen(3333);