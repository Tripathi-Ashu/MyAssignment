import React from "react";

function Navbar() {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img src="images/menu.png" className="menu-icon" alt="Menu Icon" />
        <img src="images/logo.png" className="logo" alt="Logo" />
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src="images/search.png" alt="Search Icon" />
        </div>
        <img
          src="images/voice-search.png"
          className="mic-icon"
          alt="Voice Search Icon"
        />
      </div>
      <div className="nav-right flex-div">
        <img src="images/upload.png" alt="Upload Icon" />
        <img src="images/more.png" alt="More Icon" />
        <img src="images/notification.png" alt="Notification Icon" />
        <img src="images/Me.png" className="user-icon" alt="User Icon" />
      </div>
    </nav>
  );
}

export default Navbar;
