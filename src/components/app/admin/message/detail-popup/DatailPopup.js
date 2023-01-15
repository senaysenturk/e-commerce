import React, { useEffect, useState } from "react";
import { getSubjects } from "../../../../../network/requests/contact/contact";
import "./style.scss";
import MaskInput from "react-maskinput";

export const DatailPopup = ({ messageObject, handleClose }) => {
  const [subjects, setSubjects] = useState([]);

  const getAllSubjects = async () => {
    const response = await getSubjects();
    setSubjects(response.data);
  };

  useEffect(() => {
    getAllSubjects();
  }, []);

  const handleSave = async () => {
    handleClose();
    // handleSetDisplay();
  };

  return (
    <>
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={handleClose}>
            x
          </span>

          <div className="add-product">
            <h3>EDIT MESSAGE</h3>
            <div className="product">
              <label htmlFor="user">User Name</label>
              <input
                type="text"
                placeholder="Enter a profile name."
                id="user"
                name="user"
                defaultValue={messageObject.user}
                // onChange={handleMessage}
              />

              <label htmlFor="mail">Mail Address</label>
              <input
                type="text"
                placeholder="Enter an email"
                id="mail"
                name="mail"
                defaultValue={messageObject.mail}
                // onChange={handleMessage}
              />

              <label htmlFor="phone">Phone Number</label>
              <MaskInput
                alwaysShowMask
                mask={"+90 (000) 000 - 0000"}
                size={21}
                showMask
                maskChar="_"
                name="phone"
                defaultValue={messageObject.phone}
                // onChange={handleMessage}
              />

              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject">
                {subjects.map((subject, index) =>
                  subject === messageObject.subject ? (
                    <option value={subject} key={index} selected>
                      {subject}
                    </option>
                  ) : (
                    <option value={subject} key={index}>
                      {subject}
                    </option>
                  )
                )}
              </select>

              <label htmlFor="message">Message</label>
              <textarea
                rows={5}
                placeholder="Enter a message"
                id="message"
                name="message"
                defaultValue={messageObject.message}
                // onChange={handleMessage}
              />

              <label htmlFor="createdAt">
                <strong>Created Date</strong>
              </label>
              <input
                type="date"
                id="createdAt"
                name="createdAt"
                placeholder="DD.MM.YYYY"
                // onChange={handleMessage}
                defaultValue={messageObject.createdAt}
              />

              <div className="add-button">
                <button className="btn btn-primary" onClick={handleSave}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatailPopup;
