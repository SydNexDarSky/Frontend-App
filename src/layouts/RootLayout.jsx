// This is the main Layout for the app, it will contain the header (navbar), and footer

import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="app-shell">
      {/* Put the navbar here */}
      <main className="app-main">
        <Outlet /> {/* Child routes render here */}
      </main>
      <footer className="app-footer">© 2026 My App</footer>
    </div>
  );
}
