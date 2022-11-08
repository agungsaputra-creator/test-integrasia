import propTypes from "prop-types";

const Input = ({
  label,
  isRequired,
  outterClassName,
  type,
  value,
  onChange,
  ...rest
}) => {
  return (
    <div className={["flex flex-col mb-4", outterClassName].join(" ")}>
      <label className="mb-2 text-base text-gray-800">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        className="bg-gray-200 py-2 px-3 border-2 outline-none"
        onChange={onChange}
        value={value}
        {...rest}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  isRequired: false,
  outterClassName: "",
};

Input.propTypes = {
  type: propTypes.string,
  label: propTypes.string.isRequired,
  outterClassName: propTypes.string,
  isRequired: propTypes.bool,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  onChange: propTypes.func.isRequired,
};

export default Input;
