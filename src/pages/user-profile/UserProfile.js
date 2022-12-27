import React from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-info"></div>
      <div className="user-summary">
        <h2 id="username">senaysenturk</h2>
      </div>

      <div className="full-name" />
      <label for="full-name">Firts Name</label>
      <input type="text" className="full-name" name="full-name" placeholder="Full Name" />
      <div className="foot-notes">
        <p>
          Help people discover your account using a name you're familiar with,
          such as your first and last name, nickname, or business name.
          <br />
          You can only change your name twice in 14 days.
        </p>
      </div>

      <div className="last-name" />
      <label for="last-name">Last Name</label>
      <input type="text" className="last-name" name="last-name" placeholder="Last Name" />
      <div className="foot-notes">
        <p>
          Help people discover your account using a name you're familiar with,
          such as your first and last name, nickname, or business name.
          <br />
          You can only change your name twice in 14 days.
        </p>
      </div>

      <div className="user-name" />
      <label for="user-name">UserName</label>
      <input type="text" id="username" name="user-name" placeholder="User Name"/>
      <div className="foot-notes">
        <p>
          In most cases, you will be able to change your username back to{" "}
          <span id="username">senaysenturk</span> <Link>learn more</Link>
        </p>
      </div>

      <div className="website" />
      <label for="website">Name</label>
      <input type="url" className="website" name="website" placeholder="Website" />
      <div className="foot-notes">
        <p>
        You can only edit your links on mobile devices. To change websites in your bio, visit the Instagram app and edit your profile.
        </p>
      </div>

      <div className="bio" />
      <label for="bio">Name</label>
      <input type="url" className="website" name="website" placeholder="Website" />
      <div className="foot-notes">
        <p>
        You can only edit your links on mobile devices. To change websites in your bio, visit the Instagram app and edit your profile.
        </p>
      </div>


    </div>
  );
};

export default UserProfile;
