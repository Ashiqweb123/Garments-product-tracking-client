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
