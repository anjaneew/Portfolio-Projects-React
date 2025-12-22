import Radio from "./Radio/Radio.tsx";
import Footer from "./Footer/Footer.tsx";
import "./MyApp.css";

const MyApp = () => {
  return (
    <div className="app-background">
      MyApp
      <Radio />
      <Footer />
    </div>
  );
};

export default MyApp;