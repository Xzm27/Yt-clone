import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import VideoRow from "./VideoRow.js";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <VideoRow
        image="https://images.pexels.com/photos/65880/paper-crepe-crepe-paper-colorful-65880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Chinese new year"
        channel="discover china"
        views="504 views"
        timestamp="54 mins ago"
      />
      <VideoRow
        image="https://images.pexels.com/photos/65880/paper-crepe-crepe-paper-colorful-65880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Chinese new year"
        channel="discover china"
        views="504 views"
        timestamp="54 mins ago"
      />
      <VideoRow
        image="https://images.pexels.com/photos/65880/paper-crepe-crepe-paper-colorful-65880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Chinese new year"
        channel="discover china"
        views="504 views"
        timestamp="54 mins ago"
      />
      <VideoRow
        image="https://images.pexels.com/photos/65880/paper-crepe-crepe-paper-colorful-65880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Chinese new year"
        channel="discover china"
        views="504 views"
        timestamp="54 mins ago"
      />
      <VideoRow
        image="https://images.pexels.com/photos/65880/paper-crepe-crepe-paper-colorful-65880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Chinese new year"
        channel="discover china"
        views="504 views"
        timestamp="54 mins ago"
      />
      <VideoRow
        image="https://images.pexels.com/photos/65880/paper-crepe-crepe-paper-colorful-65880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Chinese new year"
        channel="discover china"
        views="504 views"
        timestamp="54 mins ago"
      />
      <VideoRow
        image="https://images.pexels.com/photos/65880/paper-crepe-crepe-paper-colorful-65880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Chinese new year"
        channel="discover china"
        views="504 views"
        timestamp="54 mins ago"
      />
      <VideoRow
        image="https://images.pexels.com/photos/65880/paper-crepe-crepe-paper-colorful-65880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Chinese new year"
        channel="discover china"
        views="504 views"
        timestamp="54 mins ago"
      />
    </div>
  );
}

export default SearchPage;
