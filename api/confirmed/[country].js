module.exports = (req, res) => {
  const {
    query: { country }
  } = req;

  res.send(`Hello ${country}!`)
};
