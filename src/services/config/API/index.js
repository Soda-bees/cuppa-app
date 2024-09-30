import axios from 'axios';
import {axiosInstance} from '../Axiosinstance';
import {BASE_URL} from '../AxiosInstance';

export const emailVerification = async email => {
  try {
    const response = await axiosInstance.post('auth/emailVerification', {
      email,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const uploadProfile = async formData => {
  try {
    const axiosConfig = {
      method: 'post',
      url: `https://cuppa-backend-9a54793717b3.herokuapp.com/user/uploadProfile`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const data = await axios(axiosConfig);
    return data;
  } catch (error) {
    return error;
  }
};

export const signUp = async body => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await axiosInstance.post('auth/signUp', body, {headers});
    return response;
  } catch (error) {
    return error;
  }
};

export const signIn = async body => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await axiosInstance.post('auth/signIn', body, {headers});
    return response;
  } catch (error) {
    return error;
  }
};

export const forgotPasswordOTP = async email => {
  try {
    const response = await axiosInstance.post('auth/forgotPasswordOTP', {
      email,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const resetPassword = async body => {
  try {
    const response = await axiosInstance.post('auth/resetPassword', body);
    return response;
  } catch (error) {
    return error;
  }
};

export const getUserDetail = async token => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.get('user/getUserDetail', {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const updatePassword = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('user/updatePassword', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const updateUserDetails = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('user/updateUserDetails', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllCafes = async token => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.get('user/getAllCafes', {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const addToCart = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('user/addToCart', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteFromCart = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('user/deleteFromCart', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const placeOrder = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('user/placeOrder', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const cancelOrder = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    console.log(body, token);
    const response = await axiosInstance.post('user/cancelOrder', body, {
      headers,
    });
    console.log(response, 'response originallllllllllll');
    return response;
  } catch (error) {
    return error;
  }
};

export const joinExclusiveEvent = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('user/joinExclusiveEvent', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const cancelRegistration = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('user/cancelRegistration', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllDeals = async token => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.get('user/getAllDeals', {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const toggleFavorites = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('user/toggleFavorites', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllRewards = async token => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.get('user/getAllRewards', {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getOrderDetails = async (_id, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.get(`user/getOrderDetails/${_id}`, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const addCardDetails = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('user/addCardDetails', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const removeUserCard = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('user/removeUserCard', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const updateCardDetails = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('user/updateCardDetails', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const selectCard = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('user/selectCard', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const postReview = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('user/postReview', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const updateReview = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('user/updateReview', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteReview = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('user/deleteReview', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const addToAvailableAdminRewards = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post(
      'user/addToAvailableAdminRewards',
      body,
      {
        headers,
      },
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const addToAvailableCuppaRewards = async (body, token) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post(
      'user/addToAvailableCuppaRewards',
      body,
      {
        headers,
      },
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const joinMembership = async token => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post(
      'user/joinMembership',
      {},
      {
        headers,
      },
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const cancelMembership = async token => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post(
      'user/cancelMembership',
      {},
      {
        headers,
      },
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const notificationStatus = async token => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post(
      'user/notificationStatus',
      {},
      {
        headers,
      },
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllEvents = async token => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.get('user/getAllEvents', {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const adminSignIn = async body => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await axiosInstance.post('outlet/signIn', body, {headers});
    return response;
  } catch (error) {
    return error;
  }
};

export const getUserDetails = async (token, body) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('outlet/getUserDetails', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const giveStamp = async (token, body) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('outlet/giveStamp', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const giveUserReward = async (token, body) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axiosInstance.post('outlet/giveUserReward', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const loginWithGoogle = async body => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    const response = await axiosInstance.post('auth/loginWithGoogle', body, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};
