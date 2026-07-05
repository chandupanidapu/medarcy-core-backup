import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MessageBubble({ sender, message }) {

  const isUser = sender === "user";

  return (

    <article
      className={`message ${isUser ? "user-message" : "ai-message"}`}
    >

      <div className="message-header">

        <span className="message-role">

          {isUser ? "Doctor" : "Medarcy Clinical AI"}

        </span>

      </div>

      <div className="message-body">

        <ReactMarkdown remarkPlugins={[remarkGfm]}>

          {message}

        </ReactMarkdown>

      </div>

    </article>

  );

}

export default MessageBubble;