/* eslint-disable react/prop-types */
import { Avatar, Image } from "antd";

const ChatBoxSender = ({ avatar, user, message, date }) => {
  return (
    <div className="flex justify-start flex-row-reverse space-x-2 mb-3 ">
      <Avatar
        className="w-16 h-16"
        src={
          <Image
            src={avatar}
            className="object-cover w-14 h-14 rounded-full"
            preview={false}
          />
        }
      />
      <div className="px-3 py-3 text-white bg-green-500 rounded-lg w-1/4 mt-4 ">
        <p className="text-xl font-bold capitalize">{user}</p>
        <p>{message}</p>
        <p className="text-sm mt-2 text-right">{date}</p>
      </div>
    </div>
  );
};

export default ChatBoxSender;
