const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="form-control flex flex-col gap-y-2 items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`${size} checkbox checkbox-primary`}
      />
    </div>
  );
};

export default FormCheckbox;
