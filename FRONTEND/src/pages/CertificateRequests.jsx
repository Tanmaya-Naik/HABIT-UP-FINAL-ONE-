import { useEffect, useState } from "react";
import api from "../services/api";
import DashboardNavbar from "../Components/DashboardNavbar";

function CertificateRequests() {
  const [requests, setRequests] =
    useState([]);

  const fetchRequests =
    async () => {
      try {
        const res =
          await api.get(
            "/certificates"
          );

        setRequests(res.data);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchRequests();
  }, []);

  const updateStatus =
    async (
      id,
      status
    ) => {
      try {
        await api.put(
          `/certificates/${id}`,
          { status }
        );

        fetchRequests();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="min-h-screen bg-black text-white">

      <DashboardNavbar />

      <div className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-8">
          Certificate Requests
        </h1>

        <div className="grid gap-6">

          {requests.map(
            (request) => (
              <div
                key={request._id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
              >

                <h2 className="text-xl font-semibold">
                  {request.name}
                </h2>

                <p className="text-zinc-400 mt-2">
                  {request.email}
                </p>

                <p className="mt-4">
                  Status:
                  <span className="ml-2 text-yellow-500 capitalize">
                    {request.status}
                  </span>
                </p>

                <div className="flex gap-3 mt-5">

                  <button
                    onClick={() =>
                      updateStatus(
                        request._id,
                        "approved"
                      )
                    }
                    className="bg-green-600 px-4 py-2 rounded-lg"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        request._id,
                        "rejected"
                      )
                    }
                    className="bg-red-600 px-4 py-2 rounded-lg"
                  >
                    Reject
                  </button>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}

export default CertificateRequests;