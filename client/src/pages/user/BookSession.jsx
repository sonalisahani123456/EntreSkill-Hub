import { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  MessageCircle,
  CheckCircle2,
  XCircle,
  ArrowLeft,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

function BookSession() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  // Load bookings from localStorage
  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("mentorBookings")) || [];

    setBookings(savedBookings);
  }, []);

  // Cancel booking
  const handleCancelBooking = (bookingId) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this session?"
    );

    if (!confirmed) return;

    const updatedBookings = bookings.filter(
      (booking) => booking.id !== bookingId
    );

    setBookings(updatedBookings);

    localStorage.setItem(
      "mentorBookings",
      JSON.stringify(updatedBookings)
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}
        <div>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </button>

          <h1 className="text-3xl font-bold text-slate-900">
            Booked Sessions
          </h1>

          <p className="mt-2 text-slate-500">
            View and manage your upcoming mentor sessions.
          </p>
        </div>

        {/* Empty State */}
        {bookings.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
              <Calendar
                size={30}
                className="text-blue-600"
              />
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              No Sessions Booked
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              You have not booked any mentor sessions yet.
              Choose a mentor from your dashboard and book a
              session to get personalized guidance.
            </p>

            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Find a Mentor
            </button>

          </div>
        ) : (
          /* Bookings */
          <div className="grid gap-6 lg:grid-cols-2">

            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >

                {/* Top */}
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                      Mentor Session
                    </span>

                    <h2 className="mt-3 text-xl font-bold text-slate-900">
                      {booking.mentorName}
                    </h2>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    <CheckCircle2 size={14} />
                    {booking.status}
                  </div>

                </div>

                {/* Date & Time */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-slate-50 p-4">

                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar size={18} />
                      <span className="text-sm font-medium">
                        Date
                      </span>
                    </div>

                    <p className="mt-2 font-semibold text-slate-800">
                      {booking.date}
                    </p>

                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">

                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock size={18} />
                      <span className="text-sm font-medium">
                        Time
                      </span>
                    </div>

                    <p className="mt-2 font-semibold text-slate-800">
                      {booking.time}
                    </p>

                  </div>

                </div>

                {/* Message */}
                {booking.message && (
                  <div className="mt-5 rounded-2xl border border-slate-200 p-4">

                    <div className="flex items-center gap-2 text-slate-600">
                      <MessageCircle size={18} />
                      <span className="text-sm font-semibold">
                        Discussion Topic
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {booking.message}
                    </p>

                  </div>
                )}

                {/* Cancel */}
                <button
                  type="button"
                  onClick={() =>
                    handleCancelBooking(booking.id)
                  }
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-semibold text-red-600 transition hover:bg-red-100"
                >
                  <XCircle size={18} />
                  Cancel Session
                </button>

              </div>
            ))}

          </div>
        )}

      </div>
    </DashboardLayout>
  );
}

export default BookSession;