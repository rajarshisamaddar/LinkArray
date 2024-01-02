import { DATABASE_ID, USERS_ID, databases } from "../../lib/appwriteConfig";
import { addTheme } from "../../redux/slices/global/globalSlice";
import { Query } from "appwrite";
export const getTheme = async (dispatch, user) => {
  try {
    const response = await databases.listDocuments(DATABASE_ID, USERS_ID, [
      Query.equal("username", `@${user.name}`),
    ]);
    if (response.documents && response.documents.length > 0) {
      if (response.documents[0].theme !== "") {
        dispatch(addTheme(response.documents[0].theme));
      } else {
        dispatch(
          addTheme(
            window.matchMedia("(prefers-color-scheme:dark)").matches
              ? "dark"
              : "light"
          )
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
};
