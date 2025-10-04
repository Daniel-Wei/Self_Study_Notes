// Solution 2: No need for useMemo. As React may throw away the cached value if there is a specific reason to do that. 
function ChatRoom({ roomId }) {
    const [message, setMessage] = useState('');
  
    useEffect(() => {
        const options = { // ✅ No need for useMemo or object dependencies!
            serverUrl: 'https://localhost:1234',
            roomId: roomId
        }
    
        const connection = createConnection(options);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]); // ✅ Only changes when roomId changes
    // ...
};
