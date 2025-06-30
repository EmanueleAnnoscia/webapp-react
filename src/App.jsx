import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuestLayout from "./layout/GuestLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";


function App() {

 


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element = {<Movies />}/>
            <Route path="/movies/:slug" element = {<MovieDetails />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
