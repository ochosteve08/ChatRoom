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
        className="flex justify-evenly items-center my-12"
      >
        <textarea
          onChange={(event) => setMessage(event.target.value)}
          name="input"
          id="input"
          value={message}
          placeholder="write something..."
          className="w-2/3 h-20 rounded-lg p-3 text-lg transition duration-150 border border-gray-400 focus:outline-blue-400 focus:text-gray-600"
        />
        {message && (
          <button className="w-1/6 text-white flex justify-center items-center space-x-2 text-lg h-12 rounded-lg  bg-blue-700  hover:bg-blue-900 focus:bg-blue-900 transition duration-200 ease-in-out shadow-md hover:shadow-lg">
            <p className="font-semibold">Enter</p> <FiSend />
          </button>
        )}
      </form>
    </div>
  );
}

export default InputText