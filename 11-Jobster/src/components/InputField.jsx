const InputField = ({ name, label, type = "text" }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input type={type} name={name} id={name} className="form-input" />
    </div>
  );
};

export default InputField;
