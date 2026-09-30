import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout({ children }) {
  return (
    <div className="app-shell">

      <Header />

      <div className="app-body">

        <Sidebar />

        <main className="app-content">
          {children}
        </main>

      </div>

    </div>
  );
}