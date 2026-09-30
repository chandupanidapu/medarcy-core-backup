import { Send, Loader2, Paperclip, Mic } from "lucide-react";

function InputArea({
  question,
  setQuestion,
  onSend,
  loading,
}) {
  return (
    <section className="input-area">

      <div className="composer">

        <textarea
          rows={1}
          placeholder="Describe the clinical presentation, paste laboratory values, upload investigations, or ask an evidence-based clinical question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <div className="composer-footer">

          <div className="composer-tools">

            <button
              type="button"
              className="tool-btn"
              title="Attach Clinical Files"
            >
              <Paperclip size={16} />
            </button>

            <button
              type="button"
              className="tool-btn"
              title="Voice Dictation"
            >
              <Mic size={16} />
            </button>

          </div>

          <button
            className="send-btn"
            onClick={onSend}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="spin" />
                Analyzing Evidence...
              </>
            ) : (
              <>
                Analyze Case
                <Send size={16} />
              </>
            )}
          </button>

        </div>

      </div>

    </section>
  );
}

export default InputArea;