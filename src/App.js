import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Navbar from "./Components/Navbar";
import NotFound from "./Pages/NotFound";
import ProtectedPage from "./Pages/ProtectedPage";
import Setting from "./Pages/Setting";
import UserProfile from "./Pages/UserProfile";
import UserStatus from "./Pages/UserStatus";
import UserPosts from "./Pages/UserPosts";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import ProductDetail from "./Pages/ProductDetails";
import Movie from "./Pages/Movie";
import MovieDetail from "./Pages/MovieDetail";
import MovieList from "./Pages/MovieList";

function App() {
  return (
    <>
    <h2>Day15 and Day16</h2>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/About" element={<About />}>
            <Route path="Setting" element={<Setting />} />
          </Route>

          <Route path="/Contact" element={<Contact />} />

          <Route path="/Services" element={<Services />}>
            <Route path="Userprofile/:id/:name" element={<UserProfile />} />
            <Route path="UserStatus" element={<UserStatus />} />
          </Route>

          <Route path="/Product" element={<Product />}>
            <Route index element={<ProductList />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>

          <Route path="/movie" element={<Movie />}>
            <Route index element={<MovieList />} />
            <Route path=":id" element={<MovieDetail />} />
          </Route>

          <Route path="/user/:id">
            <Route path="posts" element={<UserPosts />} />
          </Route>

          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
