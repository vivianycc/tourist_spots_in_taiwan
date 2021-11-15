function IconButton(props) {
  const { className, type, clickHandler } = props;
  return (
    <button
      className={className + " icon-button"}
      type={type}
      onClick={clickHandler}
    >
      {props.children}
    </button>
  );
}
export default IconButton;
