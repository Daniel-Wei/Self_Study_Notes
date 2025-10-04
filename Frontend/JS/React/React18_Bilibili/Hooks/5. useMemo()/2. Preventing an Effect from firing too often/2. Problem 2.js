// problem 2: if declare options as Effect's dependency, every re-render will trigger useEffect() once again

function ChatRoom({ roomId }) {
    const [message, setMessage] = useState('');
  
    const options = {
        serverUrl: 'https://localhost:1234',
        roomId: roomId
    }

    useEffect(() => {
        const connection = createConnection(options);
        connection.connect();
        return () => connection.disconnect();
    }, [options]); // 🔴 Problem: This dependency changes on every render
});
