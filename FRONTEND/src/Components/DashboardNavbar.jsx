import { Link } from "react-router-dom";

function DashboardNavbar() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "#111",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >

        <Link to="/profile">
  Profile
</Link>
        <Link
          to="/dashboard"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/habits"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Habits
        </Link>

        <Link
          to="/learning"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Learning
        </Link>

        {user?.role === "admin" && (
          <Link
            to="/admin/videos"
            style={{
              color: "#F5B400",
              textDecoration: "none",
            }}
          >
            Admin
          </Link>
        )}

        {
  user?.role === "admin" && (
    <Link
      to="/certificate-requests"
    >
      Certificates
    </Link>
  )
}
      </div>

      <button
        onClick={handleLogout}
        style={{
          background: "#F5B400",
          border: "none",
          padding: "8px 15px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default DashboardNavbar;