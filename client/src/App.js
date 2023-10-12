import Header from "./components/CommonComponents/Header/Header";
import Landing from "./components/CommonComponents/Body/Landing";
import Hero from "./components/CommonComponents/Body/Hero";
import "bootstrap/dist/css/bootstrap.css";
import LandingFooter from "./components/CommonComponents/Footer/LandingFooter";

function App() {
  const aboutProps = [
    {
      title: "About",
    },

    {
      description: `This project is a cutting-edge web application developed using the MERN stack and a RESTful API. Designed with Material-UI, it offers a sleek 
      and intuitive user interface. With a focus on scalability and modern technology, the application provides users with a seamless experience.
       Our platform serves as a social network and aims to continually evolve to meet user needs. Join us on this journey to explore a robust and user-friendly web solution.
      Feel free to modify it to better suit your project's specifics.`,
    },
  ];
  return (
    <div>
      <Header />

      <div className=" p-5  row row-cols-1 row-cols-md-3 g-3">
        <div className="col"></div>
        <Hero
          title={aboutProps[0].title}
          description={aboutProps[1].description}
        />
      </div>
      <LandingFooter />
    </div>
  );
}

export default App;
