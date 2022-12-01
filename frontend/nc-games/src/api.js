import axios from "axios";

const api = axios.create({
  baseURL: "postgres://vqsvtpzs:ovkKpeiD6a_1eXPw-MRflpq8dKVxBNqi@lucky.db.elephantsql.com/vqsvtpzs", //source database url
});

export const getReviews = () => {
    return api.get(`/reviews`).then((res) => {
        return res.data;
     });
}

export const getReview = (id) => {
    return api.get(`/reviews/${id}`).then((res) => {
        return res.data.review;
     });
}

export const getCategories = () => {
    return api.get(`/categories/`).then((res) => {
        return res.data;
     });
}

export const getCategory = (category) => {
    return api.get(`/categories/${category}`).then((res) => {
        return res.data;
     });
}

export const getCommentsPerReview = (id) => {
    return api.get(`/reviews/${id}/comments`).then((res) => {
        return res.data;
    })
}