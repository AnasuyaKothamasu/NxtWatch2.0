import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import { ReactElement, useState } from "react";

import ViewItemDetails from "./routes/ViewItemDetails";
import Trending from "./routes/Trending";
import NotFound from "./routes/NotFound";
import Gaming from "./routes/Gaming";
import Saved from "./routes/Saved";
import Login from "./routes/Login";
import Home from "./routes/Home";
import "./App.css";

import { LightTheme, DarkTheme } from "./constants/ThemeConstants";
import Navbar from "./components/Navbar";
import ROUTES from "./constants/RouteConstants";

const AppComponent = ({
  isLight,
  toggleTheme,
}: {
  isLight: boolean;
  toggleTheme: () => void;
}) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !=="/login" && (
        <Navbar toggleTheme={toggleTheme} isLight={isLight} />
      )}
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.TRENDING} element={<Trending />} />
        <Route path={ROUTES.GAMING} element={<Gaming />} />
        <Route path={ROUTES.SAVED} element={<Saved />} />
        <Route path={ROUTES.VIEWITEMDETAILS} element={<ViewItemDetails />} />
        <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
      </Routes>
    </>
  );
};

const App: React.FunctionComponent = () => {
  const [isLight, setIsLight] = useState<boolean>(true);

  return (
    <ThemeProvider theme={isLight ? LightTheme : DarkTheme}>
      <BrowserRouter>
        <AppComponent
          isLight={isLight}
          toggleTheme={() => setIsLight((prev) => !prev)}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
