import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react"; // Added Suspense for lazy loading

const Home = lazy(() => import("./Pages/Home/Home"));
const Alphas = lazy(() => import("./Pages/Alphas/Alphas"));
const Words = lazy(() => import("./Pages/Words/Words"));
const Header = lazy(() => import("./components/Header"));
const Spinner = lazy(() => import("./components/Spinner"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/words" element={<Words />} />
          <Route path="/alphas" element={<Alphas />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
