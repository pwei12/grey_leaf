require("dotenv").config();

const getServerUrl = path => {
  return `https://grey-leaf-api.herokuapp.com/${path}`

  // const isDevEnv = process.env.NODE_ENV !== "production";
  // return isDevEnv
  //   ? `http://localhost:8080/${path}`
  //   : `https://grey-leaf-api.herokuapp.com/${path}`;
  
};

module.exports = getServerUrl;