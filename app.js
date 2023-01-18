const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'))

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const getDataRoutes = require('./routes/getData');

app.use(mainRoutes);
app.use('/getData', getDataRoutes);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
  });
  
// const port = process.env.PORT || 3001;
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// // app.listen(3000, () => {
//     console.log('連接成功:3000!')
// });