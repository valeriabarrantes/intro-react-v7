import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode, useState, lazy, Suspense } from "react";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details")); // Dynamic import: It is not going to load it unless we ask for it
const SearchParams = lazy(() => import("./SearchParams")); // Lazy() returns the component imported

const App = () => {
  const theme = useState("darkblue");

  return (
    <StrictMode>
      <Suspense fallback={<h2>Loading....</h2>}>
        <ThemeContext.Provider value={theme}>
          <div
            className="p-0 m-0"
            style={{
              background:
                "url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)",
            }}
          >
            <BrowserRouter>
              <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500">
                <Link
                  to="/"
                  className="text-6xl text-white hover:text-gray-200"
                >
                  Adopt Me!
                </Link>
              </header>
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            </BrowserRouter>
          </div>
        </ThemeContext.Provider>
      </Suspense>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
