/* eslint-disable react/prop-types */
import { useState } from "react"
import { FiSend } from "react-icons/fi";

const InputText = ({addMessage}) => {

    const [message, setMessage] = useState('');
    const handleMessage=(event)=>{
        event.preventDefault();
        addMessage(message);
        setMessage('');
    }
  return (
    <div>
      <form
        onSubmit={handleMessage}
        className="flex justify-evenly items-center mt-12"
      >
        <textarea
          onChange={(event) => setMessage(event.target.value)}
          name="input"
          id="input"
          value={message}
          placeholder="write something..."
          className="w-2/3 h-20 rounded-lg p-3 text-lg transition duration-150 border border-gray-400 focus:outline-blue-400 focus:text-gray-600"
        />
        <button className="w-1/6 text-white flex justify-center items-center space-x-4 text-xl h-12 rounded-lg bg-blue-900">
          <p className="font-semibold">Enter</p> <FiSend />
        </button>
      </form>
    </div>
  );
}

export default InputText