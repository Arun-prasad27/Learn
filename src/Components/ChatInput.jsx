import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import dayjs from 'dayjs';
import './ChatInput.css';
import loadingSpinner from '../assets/Loading_spinner.gif';

export function ChatInput({chatMessages, setChatMessages}) {
    const [inputText, setInputText] = useState("");

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    async function sendMessage() {
        
        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: "user",
                id: crypto.randomUUID(),
                time: dayjs().valueOf()
            }
        ];

        setChatMessages([
            ...newChatMessages,
            {
                message: <img src={loadingSpinner} className="loading-spinner"  />,
                sender: "robot",
                id: crypto.randomUUID()
            }
        ]);

        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: "robot",
                id: crypto.randomUUID(),
                time: dayjs().valueOf()
            }
        ]);
    }

    function handleKeyDown(event) {
        switch (event.key) {
            case 'Enter':
                sendMessage();
            break;
            case 'Escape':
                setInputText('');
            break;
            default:
        }
    }

    function clearMessages() {
        setChatMessages([]);
    }

    return (
    <div className='chat-input-container'>
        <input
            className='chat-input' 
            placeholder="Send a message to chatbot" 
            size="30"
            onChange={saveInputText}
            onKeyDown={handleKeyDown}
            value= {inputText}
        />
        <button
            className='send-button'
            onClick={sendMessage}>
            Send
        </button>

        <button
            className='clear-button'
            onClick={clearMessages}>
            Clear
        </button>
    </div>
    );
}