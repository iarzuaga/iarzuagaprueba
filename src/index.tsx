import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import { MovieProvider } from "./context/movieContext";
import Loader from "./components/Loader";

document.body.innerHTML = '<div id="app"></div>';
const app = createRoot(document.getElementById("app")!);
app.render(
  <MovieProvider>
    <Loader/>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </MovieProvider>
);
