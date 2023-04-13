import React, { useEffect } from "react";
import Message from "./Message";
import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (data && data.chatId) {
      const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      });
      return () => {
        unSub();
      };
    }
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.map((m, index) => (
        <Message message={m} key={index} />
      ))}
    </div>
  );
};

export default Messages;
