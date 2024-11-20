import axiosClient from "./axiosClient";

const userApi = {
  getApp(params) {
    const url = `/users`;
    return axiosClient.get(url, { params });
  },
  getId(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  register(data) {
    const url = `/users`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};
export default userApi;
