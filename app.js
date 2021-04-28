var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var pedidosRoutes = require('./routes/pedidosRoutes');
var produtosRoutes = require('./routes/produtosRoutes');
var usuariosRoutes = require('./routes/usuariosRoutes');
var cadastrosRoutes = require('./routes/cadastrosRoutes');
var categoriasRoutes = require('./routes/categoriasRoutes');
var produtosPedidosRoutes = require('./routes/produtosPedidosRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/pedidos', pedidosRoutes);
app.use('/categorias', categoriasRoutes);
app.use('/produtos', produtosRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/cadastros', cadastrosRoutes);
app.use('/produtosPedidos', produtosPedidosRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
