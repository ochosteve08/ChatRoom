import ChatBoxReceiver from "../components/ChatBoxReceiver"
import ChatBoxSender from "../components/ChatBoxSender";
import InputText from "../components/InputText";


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
      <InputText/>
    </div>
  );
}

export default Home