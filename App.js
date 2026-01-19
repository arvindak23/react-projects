import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";


// ************** Food delivery ****************
const BodyLayout = () => {
  return (
    <div className="main-container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="main">
      <BodyLayout></BodyLayout>
    </div>
  );
};

// Root
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
