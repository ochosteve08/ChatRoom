import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import InputText from "../components/InputText";
import ChatBoxReceiver from "../components/ChatBoxReceiver";
import ChatBoxSender from "../components/ChatBoxSender";
import UserLogin from "./UserLogin";
import { useNavigate } from "react-router-dom";

const ChatRoom = () => {
  let socketio = socketIOClient("http://localhost:5000");
  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleLoginUpdate = () => {
      setUser(localStorage.getItem("user"));
      setAvatar(localStorage.getItem("avatar"));
    };

    window.addEventListener("storage", (e) => {
      if (e.key === "loginUpdate") {
        handleLoginUpdate();
      }
    });

    return () => {
      window.removeEventListener("storage", handleLoginUpdate);
    };
  }, []);

  useEffect(() => {
    socketio.on("chat", (newChats) => {
      if (!Array.isArray(newChats)) {
        newChats = [newChats];
      }
      setChats([...chats, ...newChats]);
    });

    // Cleanup logic
    return () => {
      socketio.disconnect();
    };
  }, [chats, socketio]);

  const sendChatToSocket = (chat) => {
    socketio.emit("chat", chat);
  };

  const addMessage = (message) => {
    const newChat = { message, user, avatar, date: new Date() };
    setChats([...chats, newChat]);

    sendChatToSocket(newChat);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setUser("");
    setAvatar("");
    navigate("/login");
  };
  console.log(chats);

  function chatsList() {
    return chats.map((chat, index) => {
      const timeOptions = { hour: "2-digit", minute: "2-digit" };
      const formattedDate = new Date(chat.date).toLocaleTimeString(
        undefined,
        timeOptions
      );
      if (chat.user === user)
        return (
          <ChatBoxSender
            key={index}
            user={chat.user}
            avatar={chat.avatar}
            message={chat.message}
            date={formattedDate}
          />
        );
      return (
        <ChatBoxReceiver
          key={index}
          user={chat.user}
          avatar={chat.avatar}
          message={chat.message}
          date={formattedDate}
        />
      );
    });
  }

  return (
    <section>
      {user ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              padding: "10px",
            }}
          >
            <h4>Welcome : {user}</h4>
            <button
              onClick={() => logout()}
              style={{
                color: "white",
                cursor: "pointer",
                backgroundColor: "red",
                width: "10%",
                height: 35,
                fontWeight: "bold",
                borderRadius: 10,
                border: "none",
              }}
            >
              Logout
            </button>
          </div>
          {chatsList()}
          <InputText addMessage={addMessage} />
        </div>
      ) : (
        <UserLogin setUser={setUser} />
      )}
    </section>
  );
};

export default ChatRoom;
