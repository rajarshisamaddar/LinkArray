import { uploadFile } from "../../CRUD/userCrud";
export const handleImageUpload = async (
  e,
  setPreview,
  user,
  userProfile,
  dispatch,
  setLoading
) => {
  try {
    setLoading(true);
    if (e.target.files[0]) {
      const previewPromise = new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          setPreview(reader.result);
          resolve();
        };
      });
      await previewPromise;

      await uploadFile(e.target.files[0], user, userProfile, dispatch);
    }
  } catch (error) {
    console.log(error);
    setLoading(false);
  } finally {
    setLoading(false);
  }
};
