import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Register from "./section-components/register";
import Footer from "./global-components/footer-v2";

const RegisterPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Register" />
      <Register />
      <Footer />
    </div>
  );
};

export default RegisterPage;
