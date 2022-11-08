import { useRef } from "react";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { onCloseModal } from "../../store/modal/modalSlice";

const Modal = ({ show }) => {
  const refModal = useRef(null);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const modal = useSelector((state) => state.modal);

  const user = users.find((user) => user.id === modal.id);

  return (
    <>
      {show ? (
        <div className="w-full h-full lg:overflow-y-auto top-0 left-0 bg-[#000000CC]/40 fixed flex z-40 justify-center items-center">
          <div className="" ref={refModal}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white px-5 py-4">
              <div className="flex justify-between items-center mb-2">
                <h1>#{user.id}</h1>

                <div
                  className="flex justify-end mb-2 text-3xl cursor-pointer"
                  onClick={() => dispatch(onCloseModal())}
                >
                  &times;
                </div>
              </div>

              <p>{user.name}</p>
              <p>{user.age}</p>
              <p>{user.hobby}</p>
              <p dangerouslySetInnerHTML={{ __html: user.address }} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  show: propTypes.bool.isRequired,
};

export default Modal;
