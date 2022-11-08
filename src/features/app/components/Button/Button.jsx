import propTypes from "prop-types";

const Button = ({ title, type, onClick }) => {
  return (
    <button
      className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700"
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  onClick: () => {},
};

Button.propTypes = {
  title: propTypes.string.isRequired,
  type: propTypes.oneOf(["button", "submit", "reset"]),
  onClick: propTypes.func,
};

export default Button;
