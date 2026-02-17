import About from "../assets/About";
import BookingForm from "../components/BookingForm/BookingForm";
import FAQ from "../components/FAQ/FAQ";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Navbar from "../components/Navbar/Navbar";
import Pricing from "../components/Pricing/Pricing";
import Services from "../components/Services/Services";
import Stats from "../components/Stats/Stats";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Footer from "../components/Footer/Footer";
import FloatingElements from "../components/FloatingElements/FloatingElements";
import Contact from './../components/Contact/Contact';

const Index = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <Pricing/>
        <Testimonials />
        <BookingForm/>
        <FAQ />
        <Contact/>
      </main>
      <Footer/>
      <FloatingElements/>
    </>
  );
};

export default Index;
