// MOVE THIS TO USER ROUTES FILE & DELETE THIS FILE
module.exports = func => {
  return (request, response, next) => {
    return func(request, response, next).catch(next);
  };
};
