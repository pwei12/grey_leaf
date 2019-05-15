const getServerUrl = path => {
  const isProdEnv = process.env.NODE_ENV === "production";
  return isProdEnv
    ? `https://grey-leaf-api.herokuapp.com/${path}`
    : `http://localhost:8080/${path}`;
};

module.exports = getServerUrl;
