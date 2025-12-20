// image-bb
import axios from "axios";

export const uploadImageToImgbb = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const imageUrl = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_API_KEY
  }`;

  const res = await axios.post(imageUrl, formData);
  return res.data.data.url;
};

//save or update user db
export const saveUpdateUser = async (userData) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/user`,
    userData
  );
  return data;
};
