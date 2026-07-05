import MessageBubble from "./MessageBubble";

function Conversation({ messages, loading }) {

  return (

    <section className="chat-window">

      {messages.map((msg) => (

        <MessageBubble
          key={msg.id ?? `${msg.sender}-${msg.message}`}
          sender={msg.sender}
          message={msg.message}
        />

      ))}

      {loading && (

        <div className="loading">

          <div className="loading-spinner"></div>

          <span>Analyzing clinical evidence...</span>

        </div>

      )}

    </section>

  );

}

export default Conversation;