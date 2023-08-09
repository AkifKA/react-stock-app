import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchStart, getSuccess } from "../features/stockSlice";
import { fetchFail } from "../features/stockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`stock/${url}/`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return { getStockData, deleteStockData };
};

export default useStockCall;
