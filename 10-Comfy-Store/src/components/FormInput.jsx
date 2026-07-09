const FormInput = ({ label, name, type, defaultValue , size }) => {
  return (
    <div className="form-control flex flex-col gap-y-1">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        id={name}
        defaultValue={defaultValue}
        placeholder="Type here"
        className={`${size ? size : "w-full"} input input-bordered`}
      />
    </div>
  );
};

export default FormInput;
