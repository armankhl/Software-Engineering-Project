import { DRF_TOKEN_KEY, USER_KEY } from "@/utils/api/axios";
import { Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const user =
    typeof localStorage !== "undefined" && localStorage.getItem("user");

  return (
    <div
      className={
        "flex flex-row h-28 w-screen bg-[#31363f] items-center gap-x-3"
      }
      dir={"rtl"}
    >
      <div
        className={
          "flex flex-row justify-center items-center text-white basis-2/12"
        }
      >
        <img className={"w-24 h-24"} src={"/sefid.png"} />
        <p className={"font-bold text-4xl"}> SAMA </p>
      </div>
      <div
        className={"text-white basis-8/12 flex flex-row gap-16 items-center"}
      >
        <a href="/student-home" className={""}>
          خانه
        </a>
        <a href="/student-requests" className={""}>
          درخواست های من
        </a>
      </div>

      <div
        className={
          "flex flex-row justify-center items-center text-white basis-2/12 gap-3"
        }
      >
        <div onClick={handleClick} className="cursor-pointer">
          {user?.name ?? "بی نام"}
        </div>
        <img
          src={"/icons8-administrator-male-26.png"}
          className={"h-12 w-12 border border-white rounded-full"}
        />
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="mt-3"
      >
        <a href="/student-profile">
          <MenuItem onClick={handleClose}>پروفایل</MenuItem>
        </a>
        <a href="/student-profile-edit">
          <MenuItem onClick={handleClose}>ویرایش</MenuItem>
        </a>
        <MenuItem
          onClick={() => {
            localStorage.removeItem(DRF_TOKEN_KEY);
            localStorage.removeItem(USER_KEY);
            handleClose();
            router.push("/login");
          }}
        >
          خروج
        </MenuItem>
      </Menu>
    </div>
  );
};
export default Header;
