// "use client";

import Footer from "../../app/component/shared/Footer";
import Navbar from "@/app/component/shared/Navbar";


const MainLayout = ({
  children,
}) => {
  return (
    <>

      <div>
        <div className="min-h-screen ">
          <Navbar />
<div className="container mx-auto">

          {children}
</div>
        </div>
        <div>
          <Footer/>
     
        </div>
      </div>
  
    </>
  );
};

export default MainLayout;
