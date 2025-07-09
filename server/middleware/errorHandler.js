// ...existing code...
const isProd = process.env.NODE_ENV === 'production';

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Server Error',
    ...(isProd ? {} : { stack: err.stack }),
  });
};

module.exports = errorHandler;

