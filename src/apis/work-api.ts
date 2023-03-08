import { works } from "../data/sample-data";
import { Work } from "../data/types";

const WorkApi = () => {

  const getWork = (id: number): Work => {
    return works.filter(work => work.id === id)?.[0];
  };

  const getAllWorks = (): Work[] => {
    return works
  };

  return {
    getWork,
    getAllWorks,
  };
};

export default WorkApi;