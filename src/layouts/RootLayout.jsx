// This is the main Layout for the app, it will contain the header (navbar), and footer

import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      {/* Put the navbar here */}
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
      <footer>© 2026 My App</footer>
    </div>
  );
}
