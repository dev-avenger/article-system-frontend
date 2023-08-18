import axiosConfig from "services/api/axiosConfiig";

export const RefreshAuthToken = () => {

  const accessToken = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refresh");

  try {
    const { data } = axiosConfig.post(
      `/authentication/refresh`,
      {
        refreshToken: refreshToken,
      },
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );
    // Success
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("refresh", data.refreshToken);
  } catch (error) {
    console.log(error);
  }
};
