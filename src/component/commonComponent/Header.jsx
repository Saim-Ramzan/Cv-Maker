import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const logoutButton = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };
  return (
    <div className="header">
      <header className="flex border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center gap-4 w-full">
          <h1 className="w-36 font-bold text-2xl">Cv Maker</h1>

          <div
            id="collapseMenu"
            className="lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <div className="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
                <li className="max-lg:border-b max-lg:py-3">
                  <NavLink
                    to={"/home"}
                    className={({ isActive }) =>
                      `hover:text-[#007bff]  block font-bold text-[15px] ${
                        isActive ? "text-[#007bff]" : "text-gray-600"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <NavLink
                    to={"/templates"}
                    className={({ isActive }) =>
                      `hover:text-[#007bff]  block font-bold text-[15px] ${
                        isActive ? "text-[#007bff]" : "text-gray-600"
                      }`
                    }
                  >
                    Templates
                  </NavLink>
                </li>
                <li className="max-lg:border-b max-lg:py-3">
                  <NavLink
                    to={"/favorites"}
                    className={({ isActive }) =>
                      `hover:text-[#007bff]  block font-bold text-[15px] ${
                        isActive ? "text-[#007bff]" : "text-gray-600"
                      }`
                    }
                  >
                    Favorites
                  </NavLink>
                </li>
              </ul>

              <ul className="lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8 ml-auto">
                <li
                  className="max-lg:border-b max-lg:py-3 max-lg:mt-2"
                  onClick={logoutButton}
                >
                  <NavLink
                    to={"/login"}
                    href="javascript:void(0)"
                    className={({ isActive }) =>
                      `hover:text-[#007bff]  block font-bold text-[15px] ${
                        isActive ? "text-[#007bff]" : "text-gray-600"
                      }`
                    }
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="border-l border-[#333] h-6 max-lg:hidden"></div>

    <div className='flex items-center ml-auto space-x-6'>
      <NavLink to={"/signup"} href='javascript:void(0)' className={({isActive}) =>
               `hover:text-[#007bff]  block font-bold text-[15px] ${isActive ? "text-[#007bff]" : "text-gray-600"}`}>Sign-Up</NavLink>
    </div> */}
        </div>
      </header>
    </div>
  );
};
export default Header;
