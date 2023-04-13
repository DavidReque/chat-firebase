import React, { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase/firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  async function handleSend() {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          console.error(error);
          //setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, 'userChats', data.user.uid),{
      [data.chatId + '.lastMessage']:{
        text
      },
      [data.chatId+'.date']: serverTimestamp()
    })

    setText("");
    setImg(null);
  }

  function handleChange(e) {
    const value = e.target.value;
    setText(value);
  }

  function handleFile(e) {
    const file = e.target.files[0];
    setImg(file);
  }

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleChange}
        value={text}
      />
      <div className="send">
        <img src="src/assets/img/attach.png" alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={handleFile}
        />
        <label htmlFor="file">
          <img src="src/assets/img/img.png" alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
