import ChatBoxReceiver from "../components/ChatBoxReceiver"
import ChatBoxSender from "../components/ChatBoxSender";


const Home = () => {
  return (
    <div>
      <ChatBoxReceiver
        user="steve"
        message="hello world ththth ththt ththth ththth ththth ththt ththt ththt ththth ththth"
        date={"12:20pm"}
        avatar="https://picsum.photos/seed/picsum/200/300"
      />
      <ChatBoxSender
        user="steve"
        message="hello world ththth ththt ththth ththth ththth ththt ththt ththt ththth ththth"
        date={"12:20pm"}
        avatar="https://picsum.photos/seed/picsum/200/300"
      />
    </div>
  );
}

export default Home