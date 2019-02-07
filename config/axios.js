const axiosConfig = {
  baseURL: `${process.env.PROTOCOL}://${process.env.API_HOST}`,
  debug: process.env.DEBUG
}

module.exports = {
  axiosConfig
}
