import React from "react";
import useChangePass from "../../hooks/useChangePass";

const ChangePass = () => {
  const {
    currentPassword,
    setCurrentPassword,
    newPassword,
    setNewPassword,
    handleSubmit,
  } = useChangePass();
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="border p-4 rounded-md">
        <p className="text-[#222222] font-[600] text-[22px] text-center pb-6">
          Change Password
        </p>
        <div className="flex flex-col gap-6 text-[#484857]">
          <div>
            <label>Current Password</label>
            <input
              type="text"
              className="w-full border border-[#8F8F8F] rounded-lg"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div>
            <label>New Password</label>
            <input
              type="text"
              className="w-full border border-[#8F8F8F] rounded-lg"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center my-[30px]">
          <button
            className="bg-[#4DB7FD] text-white w-[180px] py-1 rounded-lg font-semibold"
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
