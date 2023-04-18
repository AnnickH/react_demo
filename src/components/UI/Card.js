const Card = ({ className, children }) => {
  const classes = className + " card";

  return <div className={classes}>{children}</div>;
};

export default Card;
