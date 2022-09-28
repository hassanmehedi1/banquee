import Banner from "./Components/Banner";
import Brands from "./Components/Brands";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Notification from "./Components/Notification";
import OneApp from "./Components/OneApp";
import SavingAccount from "./Components/SavingAccount";
import SendAndReceive from "./Components/SendAndReceive";
import Tools from "./Components/Tools";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <div data-aos="fade-up">
        <OneApp></OneApp>
      </div>
      <SendAndReceive></SendAndReceive>
      <SavingAccount></SavingAccount>
      <Notification></Notification>
      <Brands></Brands>
      <Tools></Tools>
      <Footer></Footer>
    </div>
  );
}

export default App;
