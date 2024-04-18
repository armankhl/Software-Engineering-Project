import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

const Header = () => {
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
        <a href="/ProfHome" className={""}>
          خانه
        </a>
        <a href="/ProfReq" className={""}>
          تعریف درس جدید
        </a>
        <a href="/ProfChoose" className={""}>
          درخواست ها
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
        <a href="/ProfProfile">
          <MenuItem onClick={handleClose}>پروفایل</MenuItem>
        </a>
        <MenuItem onClick={handleClose}>ویرایش</MenuItem>
        <MenuItem onClick={handleClose}>خروج</MenuItem>
      </Menu>
    </div>
  );
};
export default Header;
