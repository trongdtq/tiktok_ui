import * as request from '~/utils/request';

// API search
export const search = async (q, type = 'less') => {
  try {
    // https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less
    // encodeURIComponent(searchValue): encode special characters into valid characters in the URL
    //axios // => ~~ Fech
    // request => axios custom
    const res = await request.get(`users/search`, {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
