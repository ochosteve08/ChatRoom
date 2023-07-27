import { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import InputText from "../components/InputText";
import ChatBoxReceiver from "../components/ChatBoxReceiver";
import ChatBoxSender from "../components/ChatBoxSender";
import UserLogin from "./UserLogin";
import { CommentOutlined } from "@ant-design/icons";
import logo from "../assets/chatapp-header.png";
import { Link, useNavigate } from "react-router-dom";

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
  console.log(chats);
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setUser("");
    setAvatar("");
    navigate("/login");
  };

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
    <section className="px-6">
      <div className="flex justify-between items-center">
        <div className="text-center my-10 flex  items-center ">
          <CommentOutlined className="text-blue-400 mx-5 text-4xl" />
          <Link to={"/"}>
            <img src={logo} alt="header-logo" />
          </Link>
        </div>
        <div className="flex justify-around items-center space-x-12">
          <div className="flex items-center space-x-3">
            <h3 className="font-semibold">Hello</h3>
            <h2 className="capitalize font-bold italic">{user}</h2>
          </div>
          <button
            className="text-white bg-red-600 font-bold hover:bg-red-400 w-16 py-1  rounded-md text-center"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
      </div>

      {user ? (
        <div>
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
