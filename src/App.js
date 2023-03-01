import "./styles/styles.css";
import { Footer, Navbar } from "./components";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
