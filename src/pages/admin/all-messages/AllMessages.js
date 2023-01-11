import React, { useRef, useEffect, useState } from "react";
import {
  getMessages,
  deleteMessage,
} from "../../../network/requests/contact/contact";
import Table from "../../../components/shared/table/Table";

export const AllMessages = () => {
  const [messages, setMessages] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [messageObject, setMessageObject] = useState([]);

  const getAllMessages = async () => {
    const response = await getMessages();
    setMessages(response.data);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteMessage = async (messageId) => {
    await deleteMessage(messageId);
    getAllMessages();
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  return (
    <>
      <div className="all-users">
        <div className="">
          <Table
            searchable={true}
            head={[
              { name: "User Name", sortable: true },
              { name: "Mail Address", sortable: true },
              { name: "Phone" },
              { name: "Subject", sortable: true },
              { name: "Message", sortable: true },
              { name: "Options", width: 200 },
            ]}
            body={
              messages &&
              messages.map((message, key) => [
                message.user,
                message.mail,
                message.phone,
                message.subject,
                message.message.split(" ").slice(0, 3).join(" ") + "...",
                [
                  <button
                    className="list-btn "
                    onClick={() => {
                      setMessageObject(message);
                      togglePopup();
                    }}
                  >
                    Edit
                  </button>,
                  <button
                    className="list-btn btn-danger"
                    onClick={() => {
                      console.log(message.id);
                      handleDeleteMessage(message.id);
                    }}
                  >
                    Delete
                  </button>,
                ],
              ])
            }
          />
        </div>
        {/*  {isOpen && (
          <DetailPopup handleClose={togglePopup} messageObject={messageObject} />
        )} */}
      </div>
    </>
  );
};

export default AllMessages;
