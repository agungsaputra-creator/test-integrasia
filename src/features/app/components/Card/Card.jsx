import propTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";

import { onOpenmodal } from "../../store/modal/modalSlice";
import { deleteUser } from "../../store/user/userSlice";

import Modal from "../Modal/Modal";

const Card = ({ users }) => {
  const dispatch = useDispatch();

  const modal = useSelector((state) => state.modal);

  return (
    <>
      {users.map((user) => (
        <div className="bg-gray-300 p-5 flex items-center justify-between" key={user.id}>
          <div>
            <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
            <span className="font-normal text-gray-600">{user.email}</span>
          </div>
          <div className="flex gap-4">
            <span
              className="cursor-pointer"
              onClick={() => dispatch(onOpenmodal({ open: !modal.open, id: user.id }))}
            >
              <AiOutlineEye className="w-6 h-6" />
            </span>
            <Link to={`/user/edit/${user.id}`}>
              <AiOutlineEdit className="w-6 h-6" />
            </Link>
            <FiTrash
              className="w-6 h-6 cursor-pointer"
              onClick={() => dispatch(deleteUser(user.id))}
            />
          </div>
        </div>
      ))}

      <Modal show={modal.open} />
    </>
  );
};

Card.defaultProps = {
  users: [],
};

Card.propTypes = {
  users: propTypes.array,
};

export default Card;
