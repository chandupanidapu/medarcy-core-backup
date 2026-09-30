import {
  Stethoscope,
  FlaskConical,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const sessions = [
  {
    icon: Stethoscope,
    title: "STEMI ECG Interpretation",
    time: "Today • 11:42 AM",
  },
  {
    icon: FlaskConical,
    title: "Chronic Kidney Disease Stage IV",
    time: "Yesterday • 4:15 PM",
  },
  {
    icon: BookOpen,
    title: "Community-Acquired Pneumonia",
    time: "2 days ago • 8:30 PM",
  },
];

function RecentSessions() {
  return (
    <section className="recent-section">

      <div className="section-header">
        <h2>Recent Clinical Sessions</h2>

        <button className="view-all">
          View All
        </button>
      </div>

      <div className="recent-grid">

        {sessions.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              className="recent-card"
            >

              <div className="recent-icon">
                <Icon size={18} />
              </div>

              <div className="recent-content">
                <h3>{item.title}</h3>
                <p>{item.time}</p>
              </div>

              <ArrowRight
                size={18}
                className="recent-arrow"
              />

            </button>

          );

        })}

      </div>

    </section>
  );
}

export default RecentSessions;