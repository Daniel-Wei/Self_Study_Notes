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
