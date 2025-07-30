import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import ViewItemDetails from "./pages/ViewItemDetails";
import Trending from "./pages/Trending";
import NotFound from "./pages/NotFound";
import Gaming from "./pages/Gaming";
import Saved from "./pages/Saved";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./App.css";

import { LightTheme, DarkTheme } from "./constants/constants";
import Navbar from "./components/Navbar";
import ROUTES from "./routes/route";


const App: React.FunctionComponent = () => {
  const [isLight, setIsLight] = useState<boolean>(true);

  return (
    <ThemeProvider theme={isLight ? LightTheme : DarkTheme}>
      <BrowserRouter>
        <Navbar
          toggleTheme={() => setIsLight((prev) => !prev)}
          isLight={isLight}
        />
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.TRENDING} element={<Trending />} />
          <Route path={ROUTES.GAMING} element={<Gaming />} />
          <Route path={ROUTES.SAVED} element={<Saved />} />
          <Route path={ROUTES.VIEWITEMDETAILS} element={<ViewItemDetails />} />
          <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
