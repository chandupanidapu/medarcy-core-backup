import MainLayout from "./layout/MainLayout";
import MainContent from "./components/MainContent";

import useChat from "./hooks/useChat";
import useConversation from "./hooks/useConversation";

export default function App() {
  const {
    question,
    setQuestion,
    loading,
    sendQuestion,
  } = useChat();

  const {
    messages,
    addUserMessage,
    addAssistantMessage,
    clearConversation,
  } = useConversation();

  async function handleSend() {
    if (!question.trim()) return;

    const currentQuestion = question;

    addUserMessage(currentQuestion);

    const reply = await sendQuestion(currentQuestion);

    addAssistantMessage(reply);

    setQuestion("");
  }

  return (
    <MainLayout>
      <MainContent
        messages={messages}
        loading={loading}
        question={question}
        setQuestion={setQuestion}
        onSend={handleSend}
        clearConversation={clearConversation}
      />
    </MainLayout>
  );
}