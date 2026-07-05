import {
  Stethoscope,
  Brain,
  BookOpen,
  Pill,
  Microscope,
  ScanSearch,
  ChevronRight,
} from "lucide-react";

const actions = [
  {
    icon: Stethoscope,
    title: "Patient Assessment",
    description: "Analyze symptoms, history and examination findings.",
  },
  {
    icon: Brain,
    title: "Differential Diagnosis",
    description: "Generate prioritized evidence-based differentials.",
  },
  {
    icon: BookOpen,
    title: "Evidence Search",
    description: "Search guidelines, PubMed and clinical references.",
  },
  {
    icon: Pill,
    title: "Medication Review",
    description: "Review dosing, interactions and contraindications.",
  },
  {
    icon: Microscope,
    title: "Research Support",
    description: "Summarize studies and medical literature.",
  },
  {
    icon: ScanSearch,
    title: "Imaging Review",
    description: "Interpret radiology, ECG and uploaded studies.",
  },
];

function QuickActions() {
  return (
    <section className="quick-actions-section">

      <div className="section-header">
        <h2>Clinical Workflows</h2>
        <span>Start a structured clinical task</span>
      </div>

      <div className="quick-grid">

        {actions.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              className="quick-card"
            >

              <div className="quick-icon">
                <Icon size={20} />
              </div>

              <div className="quick-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <ChevronRight
                size={18}
                className="quick-arrow"
              />

            </button>

          );

        })}

      </div>

    </section>
  );
}

export default QuickActions;