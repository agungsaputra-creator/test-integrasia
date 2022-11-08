import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "../Card/Card";

const UserListComp = () => {
  const users = useSelector((state) => state.users);

  return (
    <>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <Link to="/user/create">Add User</Link>
      </button>

      <hr className="m-5" />

      <div className="grid gap-5 md:grid-cols-2">
        {users?.length > 0 ? (
          <Card users={users} />
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">No User</p>
        )}
      </div>
    </>
  );
};

export default UserListComp;
