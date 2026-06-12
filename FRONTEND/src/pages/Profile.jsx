import DashboardNavbar from "../Components/DashboardNavbar";
import api from "../services/api";

function Profile() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const requestCertificate =
    async () => {
      try {
        await api.post(
          "/certificates"
        );

        alert(
          "Certificate Request Submitted Successfully"
        );
      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
            "Request Failed"
        );
      }
    };

  return (
    <div className="min-h-screen bg-black text-white">

      <DashboardNavbar />

      <div className="max-w-4xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-8">
          My Profile
        </h1>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <div className="space-y-6">

            <div>
              <p className="text-zinc-400">
                Name
              </p>

              <h2 className="text-2xl font-semibold">
                {user?.name}
              </h2>
            </div>

            <div>
              <p className="text-zinc-400">
                Email
              </p>

              <h2 className="text-xl">
                {user?.email}
              </h2>
            </div>

            <div>
              <p className="text-zinc-400">
                Role
              </p>

              <h2 className="text-xl capitalize">
                {user?.role}
              </h2>
            </div>

            <div className="pt-6 border-t border-zinc-800">

              <h3 className="text-xl font-semibold mb-3">
                Certificate Request
              </h3>

              <p className="text-zinc-400 mb-5">
                Completed the learning program?
                Request a certificate for mentor review.
              </p>

              <button
                onClick={
                  requestCertificate
                }
                className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
              >
                Request Certificate
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;