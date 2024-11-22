import axiosClient from "./axiosClient";

const productApi = {
  async getAll(params) {
    try {
      const response = await axiosClient.get("/products", { params });
      console.log("API Response:", response);
      // Kiểm tra xem có 'data' trong response hay không
      if (response) {
        return response; // Trả về dữ liệu nếu có
      }
      // Nếu không có dữ liệu, trả về mảng rỗng
      return [];
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Trả về mảng rỗng khi gặp lỗi
    }
  },

  //   getId(id) {
  //     const url = `/products/${id}`;
  //     return axiosClient.get(url);
  //   },
  // getAll(params) {
  //   const url = `/products/`;
  //   return axiosClient.get(url, { params });
  // },
  add(data) {
    const url = `/products`;
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
export default productApi;
