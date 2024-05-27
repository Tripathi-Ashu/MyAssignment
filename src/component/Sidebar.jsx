import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="shortcut-links">
        <a href="#">
          <img src="images/home.png" alt="Home Icon" />
          <p>Home</p>
        </a>
        <a href="#">
          <img src="images/explore.png" alt="Explore Icon" />
          <p>Explore</p>
        </a>
        <a href="#">
          <img src="images/subscription.png" alt="Subscription Icon" />
          <p>Subscription</p>
        </a>
        <a href="#">
          <img src="images/library.png" alt="Library Icon" />
          <p>Library</p>
        </a>
        <a href="#">
          <img src="images/history.png" alt="History Icon" />
          <p>History</p>
        </a>
        <a href="#">
          <img src="images/playlist.png" alt="Playlist Icon" />
          <p>Playlist</p>
        </a>
        <a href="#">
          <img src="images/messages.png" alt="Messages Icon" />
          <p>Messages</p>
        </a>
        <a href="#">
          <img src="images/show-more.png" alt="Show More Icon" />
          <p>Show More</p>
        </a>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>SUBSCRIBED</h3>
        <a href="#">
          <img src="images/Me.png" alt="User Icon" />
          <p>Ashutosh Tripathi</p>
        </a>
        <a href="#">
          <img src="images/simon.png" alt="User Icon" />
          <p>Simon</p>
        </a>
        <a href="#">
          <img src="images/tom.png" alt="User Icon" />
          <p>Tom</p>
        </a>
        <a href="#">
          <img src="images/megan.png" alt="User Icon" />
          <p>Megan</p>
        </a>
        <a href="#">
          <img src="images/cameron.png" alt="User Icon" />
          <p>Cameron</p>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
