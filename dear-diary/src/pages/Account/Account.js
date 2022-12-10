import React from "react";
import Navbar from "../../components/layout/Navbar";
import profile from "../../assets/profile.svg";
import edit from "../../assets/material-symbols-edit.svg";
import imgUpload from "../../assets/uil-image-upload.svg";

function Account() {
  return (
    <div>
      <Navbar />
      <div className="w-full px-[100px]">
        <h1 className="border-b-2 h-[120px] text-3xl font-semibold flex items-center">
          Account
        </h1>
      </div>
      <div className="grid grid-rows-4 grid-cols-5 gap-4 mx-[100px] my-6">
        <div className="row-span-4 h-[700px]">
          <ul>
            <li className="sidebar-list">Profile</li>
            <li className="sidebar-list">Password</li>
          </ul>
        </div>
        <div className="relative col-span-4 row-span-1  bg-profile-color rounded-tl-[80px]">
          <div className="absolute top-2/4 left-8">
            <div className="relative inline-block">
              <img
                src={profile}
                alt="profile"
                className="rounded-full border-2 border-white"
              />
              <img
                src={edit}
                className="absolute bottom-3.5 right-0 w-8 h-8 rounded-full border-2 bg-gray-100"
                alt="edit"
              />
            </div>
          </div>
          <img
            src={imgUpload}
            alt="img-upload"
            className="w-8 h-8 absolute bottom-3 right-3"
          ></img>
        </div>
        <div className="row-span-3 col-span-4  bg-yellow-50 my-24">
          <form>
            <div className="flex">
              <div className="m-10 w-1/2">
                <label for="firstName">First Name</label>
                <input
                  className="name"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="m-10 w-1/2">
                <label for="lastName">Last Name</label>
                <input
                  className="name"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="flex">
              <div className="ml-10 mr-10 w-1/2">
                <label for="displayName">Display Name</label>
                <input
                  className="name"
                  id="displayName"
                  type="text"
                  placeholder="Display Name"
                />
              </div>
              <div className="ml-10 mr-10 w-1/2">
                <label for="gender">Gender</label>
                <input
                  className="name"
                  id="gender"
                  type="text"
                  placeholder="Gender"
                />
              </div>
            </div>

            <div className="flex justify-end mt-10">
              <button className="mr-6 border-2 border-grey-50 pl-5 pr-5 pt-1 pb-1 bg-white rounded-2xl">
                Cancel
              </button>
              <button className="mr-10 pl-7 pr-7 pt-1 pb-1 bg-black text-white rounded-2xl">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account;
