const InputField = ({ name, label, type = "text", ...props }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="form-input"
        {...props}
      />
    </div>
  );
};

export default InputField;
