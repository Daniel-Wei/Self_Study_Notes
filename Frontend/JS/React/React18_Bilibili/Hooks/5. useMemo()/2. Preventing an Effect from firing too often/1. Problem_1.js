// problem 1: Every reactive value must be declared as a dependency of your Effect
function ChatRoom({ roomId }) {
    const [message, setMessage] = useState('');
  
    const options = {
      serverUrl: 'https://localhost:1234',
      roomId: roomId
    }

    useEffect(() => {
      const connection = createConnection(options);
      connection.connect();
      // ...
    }); 
};

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

