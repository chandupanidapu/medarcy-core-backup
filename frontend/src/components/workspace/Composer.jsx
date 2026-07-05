import {
  Send,
  Paperclip,
  Mic,
  FileText,
  Image,
  Activity
} from "lucide-react";

function Composer() {

  return (

    <section className="workspace-composer">

      <textarea
        placeholder="Describe the patient, paste laboratory values, upload reports or imaging, or ask a clinical question..."
      />

      <div className="composer-toolbar">

        <div className="composer-left">

          <button className="tool-btn">
            <Paperclip size={16}/>
            Attach
          </button>

          <button className="tool-btn">
            <FileText size={16}/>
            PDF
          </button>

          <button className="tool-btn">
            <Image size={16}/>
            Image
          </button>

          <button className="tool-btn">
            <Activity size={16}/>
            ECG
          </button>

        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center"
          }}
        >

          <button className="tool-btn">
            <Mic size={16}/>
            Voice
          </button>

          <button className="analyze-btn">
            Analyze
            <Send size={16}/>
          </button>

        </div>

      </div>

    </section>

  );

}

export default Composer;