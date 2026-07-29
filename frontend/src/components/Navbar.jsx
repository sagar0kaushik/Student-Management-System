import { GraduationCap, UserCircle2 } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-section">

        <div className="logo-icon">
          <GraduationCap size={28} />
        </div>

        <div>
          <h2>Student Dashboard</h2>
          <p>FastAPI • React • MongoDB</p>
        </div>

      </div>

      <div className="profile">

        <UserCircle2 size={38} />

      </div>

    </nav>
  );
}

export default Navbar;