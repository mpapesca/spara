import { UserApi } from "../apis";
import { IUser } from "../data/types";

const UserService = () => {

  const userApi = UserApi();

  const getUser = (id: number): IUser => {
    return userApi.getUser(id);
  };

  const getAllUsers = (): IUser[] => {
    return userApi.getAllUsers();
  };

  return {
    getUser,
    getAllUsers,
  };
};

export default UserService;