import dayjs from 'dayjs';
import './ChatMessage.css';
import mechaImage from '../assets/mecha.png';
import userImage from '../assets/round me 2.png';

export function ChatMessage({ message, sender, time }) {
    //const message = props.message;
    //const sender = props.sender;
    //const { message, sender } = props; //destructuring method

    /*if(sender === 'robot') {
        return(
         <div>
            <img src="../src/assets/robot.png" width="50"/>
            {message}
        </div>    
        );
    }*/

    return (
        <div className={sender === "user" ? "chat-message-user" : "chat-message-robot"}>
           {sender === 'robot' && (
            <img src={mechaImage} className='chat-message-profile'/>
            )}
            <div className='chat-message-text'>
                {message}

                {time && (
                    <div className='chat-message-time'>
                        {dayjs(time).format('h:mma')}
                    </div>
                )}
            </div>
           {sender === 'user' && (
            <img src={userImage} className='chat-message-profile'/>
            )}
        </div>
    );
}