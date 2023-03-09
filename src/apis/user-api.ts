import { users } from "../data/sample-data";
import { IUser } from "../data/types";

const UserApi = () => {

  const getUser = (id: number): IUser => {
    return users.filter(user => user.id === id)?.[0];
  };

  const getAllUsers = (): IUser[] => {
    return users;
  };


  return {
    getUser,
    getAllUsers,
  };
};

export default UserApi;