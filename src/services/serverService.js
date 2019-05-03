require("dotenv").config();

const getServerUrl = path => {
  const isDevEnv = process.env.NODE_ENV !== "production";
  console.log("Node Env is")
  console.log(process.env.NODE_ENV)
  return isDevEnv
    ? `http://localhost:8080/${path}`
    : `https://grey-leaf-api.herokuapp.com/${path}`;
};

module.exports = getServerUrl;