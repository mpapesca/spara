import { WorkApi } from "../apis";
import { IWork } from "../data/types";

const WorkService = () => {
  const workApi = WorkApi();

  const getWork = (id: number): IWork => {
    return workApi.getWork(id);
  };

  const getAllWorks = (): IWork[] => {
    return workApi.getAllWorks();
  };

  return {
    getWork,
    getAllWorks,
  };
};

export default WorkService;