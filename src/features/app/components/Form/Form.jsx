import propTypes from "prop-types";

const Form = ({ onSubmit, children }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

Form.propTypes = {
  onSubmit: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
};

export default Form;
