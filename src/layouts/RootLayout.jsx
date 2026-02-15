// This is the main Layout for the app, it will contain the header (navbar), and footer

import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
      <footer>© 2026 My App</footer>
    </div>
  );
}