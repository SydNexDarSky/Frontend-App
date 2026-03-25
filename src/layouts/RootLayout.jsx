// This is the main Layout for the app, it will contain the header (navbar), and footer

import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="w-full">
      {/* Put the navbar here */}
      <main className="w-full min-h-screen">
        <Outlet /> {/* Child routes render here */}
      </main>
      <footer className="w-full h-max p-4 bg-black text-white">© 2026 My App</footer>
    </div>
  );
}
