const { app } = require('./app');
const PORT = 8081;

app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}`)
})