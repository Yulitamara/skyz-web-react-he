import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Advantages from "../components/Advantages";
// import Demo from "../components/Demo";

const Home = ({ darkMode }) => {
  return (
    <>
      <Helmet>
        <title>SkyzCRM</title>
        <meta
          name="description"
          content="לניהול לקוחות בכל מקום בזמן אמת"
        ></meta>
        <link rel="canonical" href="/"></link>
      </Helmet>
      <Hero />
      {/* <Demo /> */}
      <About />
      <Products darkMode={darkMode} />
      <Advantages />
    </>
  );
};

export default Home;
