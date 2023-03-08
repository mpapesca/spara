import { UserApi } from "../apis";
import { User } from "../data/types";

const UserService = () => {

  const userApi = UserApi();

  const getUser = (id: number): User => {
    return userApi.getUser(id);
  };

  const getAllUsers = (): User[] => {
    return userApi.getAllUsers();
  };

  return {
    getUser,
    getAllUsers,
  };
};

export default UserService;