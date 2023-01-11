import React, { useRef, useEffect, useState } from "react";
import {
  getSubjects,
  postMessage,
} from "../../../network/requests/contact/contact";
import "./style.scss";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MaskInput from "react-maskinput";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const MAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ContactUs = () => {
  const [sendMessage, setSendMessage] = useState({});
  const [subject, setSubject] = useState();
  const [subjects, setSubjects] = useState([]);

  const userRef = useRef();
  const errRef = useRef();

  const [mail, setMail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);
  const [errMail, setErrMail] = useState("");

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [errUser, setErrUser] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const getAllSubjects = async () => {
    const response = await getSubjects();
    setSubjects(response.data);
  };

  useEffect(() => {
    getAllSubjects();
  }, []);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidMail(MAIL_REGEX.test(mail));
  }, [mail]);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setErrMail("");
  }, [mail]);

  useEffect(() => {
    setErrUser("");
  }, [user]);

  useEffect(() => {
    setErrMsg("");
  }, [user, mail]);

  const handleMessage = (e) => {
    console.log(sendMessage);
    setSendMessage({ ...sendMessage, [e.target.name]: e.target.value });

    if (e.target.name === "subject") {
      setSubject(e.target.value);
    }
  };

  const addMessage = async (e) => {
    try {
      var response = await postMessage({
        user,
        mail,
        ...sendMessage,
        createdAt: new Date().toLocaleString(),
      });
      alert("message is send successfully");
      setMail("");
      setUser("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
    /*  var response = await postMessage(sendMessage);
    alert("message is send successfully"); */
  };

  const handleSend = async (e) => {
    // e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = MAIL_REGEX.test(mail);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    addMessage();
  };

  return (
    <form
      className="hero"
      // action="mailto:info@shiwear.com"
      // method="post"
      // enctype="text/plain"
    >
      <fieldset>
        <div className="about-content">
          <h1>Contact Us</h1>
          <img src="./about-us-photos/about-us.jpeg" alt="" />
        </div>

        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>

        <div className="about-info">
          <div className="message">
            <h3 className="msg">Your Message . . . </h3>
          </div>

          <div className="full-name">
            <input
              type="text"
              className="name"
              name="name"
              ref={userRef}
              autoComplete="off"
              placeholder="Full Name"
              onChange={(e) => {
                setUser(e.target.value);
              }}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p id="uidnote" className={errUser ? "instructions" : "offscreen"}>
              {errUser}
            </p>
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
          </div>

          <div className="email">
            <input
              type="email"
              className="email"
              name="mail"
              ref={userRef}
              autoComplete="off"
              placeholder="E-mail"
              onChange={(e) => {
                setMail(e.target.value);
              }}
              value={mail}
              required
              aria-invalid={validMail ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setMailFocus(true)}
              onBlur={() => setMailFocus(false)}
            />
            <p id="uidnote" className={errMail ? "instructions" : "offscreen"}>
              {errMail}
            </p>
            <p
              id="uidnote"
              className={
                mailFocus && mail && !validMail ? "instructions" : "offscreen"
              }
            >
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
          </div>

          <div className="tel">
            <MaskInput
              alwaysShowMask
              mask={"+90 (500) 000 - 0000"}
              size={21}
              showMask
              maskChar="_"
              name="phone"
              onChange={handleMessage}
            />
          </div>

          <select id="subject" name="subject" onChange={handleMessage}>
            <option>Subject</option>
            {subjects.map((subject, index) => (
              <option key={index}>{subject}</option>
            ))}
          </select>

          <div className="msg-box">
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write message..."
              onChange={handleMessage}
            ></textarea>
          </div>

          <div className="btn-about">
            <button className="about-btn" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default ContactUs;
