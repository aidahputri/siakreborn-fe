import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";
import toast from "react-hot-toast";
import { ToasterError } from "@/commons/components";

const getAverageCPLDataList = (params = {}) => {
  const { getToken } = tokenManager();
  const token = getToken();
  let paramsGet = Object.assign(params, { token });
  return axios
    .get(`${environment.rootApi}/call/v2/cpl/laporan/chart`, {
      params: paramsGet,
      headers: {
        Authorization: token,
      },
    })
    .catch((error) => {
      console.error(error);
      toast.error((t) => <ToasterError error={error} t={t} />);
    });
};

export default getAverageCPLDataList;