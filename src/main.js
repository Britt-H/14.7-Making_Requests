const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000/constellations";

function index() {
  axios
    .get(BASE_URL)
    .then((response) => {
      console.log(response.data)
    })
}

function create(body) {
  axios
    .post(BASE_URL, body)
    .then((response) => {
      console.log(response.data)
    })
}

function show(id) {}

function update(id, body) {}

function destroy(id) {}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
