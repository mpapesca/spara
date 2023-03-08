import { WorkApi } from "../apis";
import { Work } from "../data/types";

const WorkService = () => {
  const workApi = WorkApi();

  const getWork = (id: number): Work => {
    return workApi.getWork(id);
  };

  const getAllWorks = (): Work[] => {
    return workApi.getAllWorks();
  };

  return {
    getWork,
    getAllWorks,
  };
};

export default WorkService;