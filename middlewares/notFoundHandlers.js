const notFoundHandlers = (req, res, next) => {
  res.status(404).json({
    message: "this router not exist",
  });
};



module.exports = {
  notFoundHandlers
};