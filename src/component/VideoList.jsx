import React from "react";

function VideoList() {
  return (
    <div className="container">
      <div className="list-container">
        <div className="vid-list">
          <a href="play.html">
            <img
              src="images/thumbnail1.png"
              className="thumbnail"
              alt="Thumbnail"
            />
          </a>
          <div className="flex-div">
            <img src="images/Me.png" alt="User Icon" />
            <div className="vid-info">
              <a href="play.html">
                Best channel to learn coding that helps you to be a Web
                developer
              </a>
              <p>Ashutosh Tripathi</p>
              <p>15K Views 2 days ago</p>
            </div>
          </div>
        </div>
        {/* Add more video list items here */}
      </div>
    </div>
  );
}

export default VideoList;
