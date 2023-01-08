const express = require('express');
const { notFoundHandlers } = require('./middlewares/notFoundHandlers');
const {globalErrorHandler} = require('./middlewares/globalErrorHandler')
const { router } = require('./router/rootRouter')

const app = express();

app.use(express.json());

app.use('/api', router);

// app.use('/', (req, res, next) => {
//     console.log("Hello from middleware");
//     next()
// })

// app.use("/", (req, res, next) => {
//     console.log("Hello from middleware 2");
//     next()
// });

app.use(notFoundHandlers);

app.use(globalErrorHandler);

module.exports = {
    app
};