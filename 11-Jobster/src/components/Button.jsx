const Button = ({ text, disabled }) => {
  return (
    <button
      className="btn btn-block"
      type="submit"
      disabled={disabled ? disabled : false}
    >
      {text}
    </button>
  );
};

export default Button;
