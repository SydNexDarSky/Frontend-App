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