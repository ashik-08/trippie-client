import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  const { user } = true;

  //   const handleLogout = () => {
  //     const toastId = toast.loading("Logging Out...");
  //     logOut()
  //       .then(() => {
  //         toast.success("Logged Out Successfully.", { id: toastId });
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         toast.error("Something went wrong!", { id: toastId });
  //       });
  //   };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-sm md:text-base xl:text-lg font-semibold"
              : "text-title text-sm md:text-base xl:text-lg"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-sm md:text-base xl:text-lg font-semibold"
              : "text-title text-sm md:text-base xl:text-lg"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/destination"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-sm md:text-base xl:text-lg font-semibold"
              : "text-title text-sm md:text-base xl:text-lg"
          }
        >
          Destination
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tour"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-sm md:text-base xl:text-lg font-semibold"
              : "text-title text-sm md:text-base xl:text-lg"
          }
        >
          Tour
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-primary text-sm md:text-base xl:text-lg font-semibold"
              : "text-title text-sm md:text-base xl:text-lg"
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed z-10 w-screen">
      <nav className="bg-gray-50">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-4 z-[1] p-2 drop-shadow-lg bg-base-100 rounded-box w-max"
              >
                {links}
              </ul>
            </div>
            {/* logo & name */}
            <div className="flex justify-center items-center gap-2 md:gap-4">
              <img className="w-8 md:w-9 xl:w-10" src={logo} alt="logo-img" />
              <Link
                to="/"
                className="text-[#000000] md:text-2xl lg:text-3xl font-volkhov font-bold"
              >
                Trippie
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user?.email ? (
              // dropdown icon
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 md:w-14 lg:w-16 rounded-full">
                    {user?.photoURL ? (
                      <img
                        className="text-[10px]"
                        src={user?.photoURL}
                        alt="img-error"
                      />
                    ) : (
                      <img
                        className="text-[10px]"
                        src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
                        alt="default"
                      />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content mt-4 z-[1] p-2 drop-shadow-lg bg-base-100 rounded-box w-max"
                >
                  <>
                    <li>
                      <a className="pointer-events-none">{user?.email}</a>
                    </li>
                    <li>
                      <Link to="/1">111</Link>
                    </li>
                    <li>
                      <Link to="/2">222</Link>
                    </li>
                    <li>
                      <Link to="/3">333</Link>
                    </li>
                    <li>{/* <Link onClick={handleLogout}>Logout</Link> */}</li>
                  </>
                </ul>
              </div>
            ) : (
              <div className="md:space-x-2">
                <Link
                  to="/login"
                  className="btn-ghost px-4 md:px-12 lg:px-8 xl:px-12 py-3 rounded-lg text-primary text-sm md:text-base xl:text-lg font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="hidden md:inline md:px-12 lg:px-8 xl:px-12 py-3 rounded-lg bg-primary text-white text-sm md:text-base xl:text-lg font-semibold"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
