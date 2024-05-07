import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = () => {
  return (
    <section>
      <NavBar />
      <div className="min-h-[calc(100vh-522px)] px-6">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
};

export default MainLayout;
