import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./components/MovieCard";

const Dashboard = () => {
  return (
    <div>
      <h1>Movie Collection</h1>
      <Link to="/add-movie">
        <button style={{ padding: "10px", fontSize: "16px" }}>Add Movie</button>
      </Link>
      <div className="movie-list">
        {/* Render MovieCard components here */}
      </div>
    </div>
  );
};

export default Dashboard;
