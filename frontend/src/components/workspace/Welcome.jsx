function Welcome() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <section className="workspace-hero">

      <div className="hero-greeting">
        👋 {greeting}, Doctor
      </div>

      <h2 className="hero-title">
        What clinical problem would you like to analyze today?
      </h2>

      <p className="hero-description">
        Analyze patient cases, interpret laboratory findings,
        generate differential diagnoses, review medical evidence,
        and receive evidence-based clinical decision support from a
        unified clinical intelligence workspace.
      </p>

    </section>
  );
}

export default Welcome;