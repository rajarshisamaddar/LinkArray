import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth } from "../../utils/AuthContext";
import ChangeImagePreview from "./ChangeImagePreview";
import toast from "react-hot-toast";
import { handleImageUpload } from "./handleImageUpload";
import UploadImagePreview from "./UploadImagePreview";
import UserDetails from "./UserDetails";
const UserData = () => {
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const { user } = useAuth();
  const handleFileUpload = () => {
    fileInputRef.current.click();
  };
  const userProfile = useSelector((state) => state.global.user);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-rows-2 gap-y-[1.5rem] h-full mt-[3rem]">
      <div className="bg-[#fafafa] dark:bg-[#111] h-[13rem] sm:h-auto lg:h-auto flex items-center px-[1.5rem] rounded-lg sm:py-[1.5rem] lg:py-[2rem]">
        <div
          className="grid grid-cols-3 gap-x-[3rem] items-center sm:grid-cols-1 lg:grid-cols-1
        text-gray-600 dark:text-gray-400"
        >
          <p className="text-[15px]  sm:mb-[1rem] lg:mb-[1rem]">
            Profile picture
          </p>

          <div
            onClick={() => {
              handleFileUpload();
            }}
          >
            {preview || userProfile.image ? (
              <ChangeImagePreview
                preview={preview}
                userProfile={userProfile}
                loading={loading}
              />
            ) : (
              <UploadImagePreview />
            )}
          </div>

          <p className="text-[12px]  sm:mt-[1rem] lg:mt-[1rem]">
            Image must be below 1024x1024px. Use JPG, JPEG, PNG, or GIF format.
          </p>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".png, .jpg, .jpeg, .gif"
            onChange={async (e) => {
              const file = e.target.files[0];
              if (file) {
                // Check file size (1MB = 1024 * 1024 bytes)
                if (file.size > 1024 * 1024) {
                  toast.error("File size exceeds 1MB");
                  return;
                }

                // Check image dimensions
                const img = new Image();
                img.src = URL.createObjectURL(file);
                img.onload = function () {
                  if (this.width > 1024 || this.height > 1024) {
                    toast.error("Image dimensions exceed 1024x1024");
                    return;
                  }

                  // If file size and dimensions are ok, handle the image upload
                  handleImageUpload(
                    e,
                    setPreview,
                    user,
                    userProfile,
                    dispatch,
                    setLoading
                  );
                };
              }
            }}
          />
        </div>
      </div>
      <UserDetails />
    </div>
  );
};

export default UserData;
