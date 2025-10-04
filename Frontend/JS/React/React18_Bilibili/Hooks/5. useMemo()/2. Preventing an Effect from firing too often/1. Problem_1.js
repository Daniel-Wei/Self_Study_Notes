// problem 1:  
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

// Solution 1:  Wrap the object you need to call from an Effect in useMemo
function ChatRoom({ roomId }) {
    const [message, setMessage] = useState('');

    // This ensures that the options object is the same between re-renders if useMemo returns the cached object.
    const options = useMemo(() => {
        return {
            serverUrl: 'https://localhost:1234',
            roomId: roomId
        };
    }, [roomId]); // ✅ Only changes when roomId changes
  
    useEffect(() => {
          const connection = createConnection(options);
          connection.connect();
          return () => connection.disconnect();
    }, [options]); // ✅ Only changes when options changes
    // ...
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

