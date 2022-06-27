const addFlush = (req, res, next) => {
  if (!res.flush) res.flush = () => {};

  next();
};

export default addFlush;
