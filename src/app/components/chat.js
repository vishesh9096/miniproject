import React, { useState, useRef, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isChatboxOpen, setIsChatboxOpen] = useState(true);

  const chatboxRef = useRef(null);

  useEffect(() => {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }, [messages]);

  const handleSendMessage = (message) => {
    const userMessage = { user: true, message };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    fetch("http://127.0.0.1:5000/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_input: message,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        const botMessage = { user: false, message: result.response };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      })
      .catch((error) => console.log("error", error));
  };

  const handleCloseChatbox = () => {
    setIsChatboxOpen(false);
  };

  return (
    <>
      {isChatboxOpen ? (
        <div className="fixed bottom-16 right-4 w-96">
          <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
            <div className="p-4 border-b bg-gray-500 text-white rounded-t-lg flex justify-between items-center">
              <p className="text-lg font-semibold">Expert Bot</p>
              <button
                id="close-chat"
                className="text-gray-300 hover-text-gray-400 focus-outline-none focus-text-white"
                onClick={handleCloseChatbox}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              id="chatbox"
              className="p-4 h-80 overflow-y-auto flex flex-col justify-end"
              ref={chatboxRef}
            >
              <div className="overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    className={`mb-2 ${message.user ? "text-right" : ""}`}
                    key={index}
                  >
                    <p
                      className={`rounded-lg py-2 px-4 inline-block ${
                        message.user ? "bg-orange-200" : "border border-orange-200"
                      }`}
                    >
                      {message.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 border-t flex">
              <input
                id="user-input"
                type="text"
                placeholder="Type a message"
                className="w-full px-3 py-2 border rounded-l-md focus-outline-none focus-ring-2 focus-ring-orange-500"
              />
              <button
                id="send-button"
                className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover-bg-orange-600 transition duration-300"
                onClick={() => {
                  const userInput = document.getElementById("user-input").value;
                  if (userInput) {
                    handleSendMessage(userInput);
                    document.getElementById("user-input").value = "";
                  }
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : <div></div>}
    </>
  );
};

export default Chat;
