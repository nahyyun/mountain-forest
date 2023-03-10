import axios from "axios";

export const getAdminData = async (tab, page) => {
  try {
    const response = await axios({
      method: "get",
      url: `http://kdt-sw3-team03.elicecoding.com:5000/admin/${tab}`,
      params: { order: "desc", page: page, take: 10 },
      headers: {
        contentType: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    return response.data;
  } catch (error) {
    console.dir(error);
  }
};

export const deleteAdminData = async (tab, id) => {
  try {
    const response = await axios({
      method: "delete",
      url: `http://kdt-sw3-team03.elicecoding.com:5000/admin/${tab}/${id}`,
      headers: {
        contentType: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.dir(error);
  }
};

export const putChallangeData = async (id) => {
  try {
    const response = await axios({
      method: "put",
      url: `http://kdt-sw3-team03.elicecoding.com:5000/admin/challenges/${id}/approve`,
      headers: {
        contentType: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.dir(error);
  }
};

export const searchPostsByPos = async ({ params }) => {
  try {
    const response = await axios({
      method: "get",
      url: `http://kdt-sw3-team03.elicecoding.com:5000/mountains/search/pos`,
      params,
    });

    return response.data;
  } catch (error) {
    console.dir(error);
  }
};

export const getMountainInfo = async (id) => {
  try {
    const response = await axios({
      method: "get",
      url: `http://kdt-sw3-team03.elicecoding.com:5000/mountains/kakao/${id}`,
    });

    return response.data;
  } catch (error) {
    console.dir(error);
  }
};

export const postUserLogin = async (form) => {
  try {
    const response = await axios.post(
      "http://kdt-sw3-team03.elicecoding.com:5000/auth/login",
      form
    );
    return response;
  } catch (error) {
    console.dir(error);
  }
};

export const postUserRegister = async (registerform) => {
  try {
    const response = await axios.post(
      "http://kdt-sw3-team03.elicecoding.com:5000/users",
      {
        email: registerform.email,
        username: registerform.username,
        password: registerform.password,
        phoneNumber: registerform.phoneNumber,
        region: registerform.region,
        gender: registerform.gender,
        age: Number(registerform.age),
        profileImg: registerform.profileImg,
      }
    );
    return response;
  } catch (error) {
    console.dir(error);
  }
};

export const getChallengeList = async () => {
  try {
    const response = await axios.get(
      "http://kdt-sw3-team03.elicecoding.com:5000/challenges?order=desc&page=1&take=20"
    );
    return response;
  } catch (error) {
    console.dir(error);
  }
};

export const getTopRankingList = async (point) => {
  try {
    const response = await axios({
      method: "get",
      url: `http://kdt-sw3-team03.elicecoding.com:5000/users`,
      params: point,
    });

    return response.data;
  } catch (error) {
    console.dir(error);
  }
};
