import { useEffect } from 'react';
import { createConnection } from './chat.js';

// in dev environment, show 'connecting...' twice
export default function ChatRoom() {
    useEffect(() => {
        const connection = createConnection();
        connection.connect();
    }, []);
    return <h1>Welcome to the chatroom！</h1>;
}

// in dev environment
// connecting... -> disconnected -> connecting...
// useEffect() calls its cleanup function when the component re-rendered, and also when the component is removed
export default function ChatRoom() {
    useEffect(() => {
        const connection = createConnection();
        connection.connect();
        return () => connection.disconnect();
    }, []);
    return <h1>欢迎来到聊天室！</h1>;
}
