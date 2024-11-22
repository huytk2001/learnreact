import axiosClient from "./axiosClient";

const userApi = {
  getApp(params) {
    const url = `/users`;
    return axiosClient.get(url, { params });
  },
  getId(id) {
    const url = `/users/${id}`;
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
    const url = `/users/${id}`;
    return axiosClient.delete(url);
  },
  login(data) {
    const url = "/auth/login";
    return axiosClient.post(url, data);
  },
};
export default userApi;
