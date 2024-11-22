import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor cho request
axiosClient.interceptors.request.use(
  (config) => {
    // Có thể thêm token hoặc header tùy chỉnh tại đây
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor cho response
axiosClient.interceptors.response.use(
  (response) => {
    // Xử lý phản hồi có nội dung
    if (response.status === 204) {
      // Nếu API trả về 204, có thể trả về null hoặc thông báo mặc định
      return null;
    }
    return response.data; // Trả về dữ liệu gọn gàng
  },
  (error) => {
    if (error.response) {
      const { config, status, data } = error.response;
      // Ví dụ xử lý lỗi 400 cho các URL cụ thể
      const URLS = ["/auth/login/", "/users"];
      if (URLS.includes(config.url) && status === 400) {
        const errorList = data.data || [data];
        const firstError = errorList.length > 0 ? errorList[0] : {};
        const messageList = firstError.messages || [];
        const firstMessage = messageList.length > 0 ? messageList[0] : {};
        throw new Error(firstMessage.message || "Đã xảy ra lỗi.");
      }
    }
    // Xử lý lỗi khác
    return Promise.reject(error);
  }
);

export default axiosClient;
