import { works } from "../data/sample-data";
import { IWork } from "../data/types";

const WorkApi = () => {

  const getWork = (id: number): IWork => {
    return works.filter(work => work.id === id)?.[0];
  };

  const getAllWorks = (): IWork[] => {
    return works
  };

  return {
    getWork,
    getAllWorks,
  };
};

export default WorkApi;