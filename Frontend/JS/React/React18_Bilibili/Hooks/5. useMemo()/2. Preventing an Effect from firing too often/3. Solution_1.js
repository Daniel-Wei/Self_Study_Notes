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
