
const getServerUrl = path => {
  const isProdEnv = process.env.NODE_ENV === "production";
  console.log(process.env.NODE_ENV);
    return `https://grey-leaf-api.herokuapp.com/${path}`
  // return isProdEnv
  //   ? `https://grey-leaf-api.herokuapp.com/${path}`
  //   : `http://localhost:8080/${path}`;
};

module.exports = getServerUrl;
