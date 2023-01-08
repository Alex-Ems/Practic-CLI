const express = require("express");

const router = express.Router();

router.get('/posts/:postId/:anotherId', (req, res, next) => {
  const { postId, anotherId } = req.params;
  console.log(typeof postId, typeof anotherId);
  res.json({
    name: 'Alex',
})

  // res.statusMessage = 'Castom status message'
  // res.status(200).end('hello from router');
  
  // console.log('Hello from router');
  // next();
})

router.post('/posts', (req, res, next) => {
try {
  throw new Error('somefing error')
} catch (error) {
  next(error)
  
}

  // return next(new Error('please try again later'))
  // console.log(req.body);
  // next();

})

module.exports = {
  router,
};
