import { users } from "../data/sample-data";
import { User } from "../data/types";

const UserApi = () => {

  const getUser = (id: number): User => {
    return users.filter(user => user.id === id)?.[0];
  };

  const getAllUsers = (): User[] => {
    return users;
  };


  return {
    getUser,
    getAllUsers,
  };
};

export default UserApi;