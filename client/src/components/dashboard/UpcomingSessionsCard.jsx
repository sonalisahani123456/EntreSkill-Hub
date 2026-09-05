import { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  UserRound,
  CheckCircle2,
  XCircle,
} from "lucide-react";

function UpcomingSessionsCard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("mentorBookings")) || [];

    setBookings(savedBookings);
  }, []);

  const cancelBooking = (bookingId) => {
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
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Upcoming Mentor Sessions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your scheduled mentor sessions.
          </p>
        </div>

        <div className="rounded-xl bg-blue-50 p-3">
          <Calendar
            size={24}
            className="text-blue-600"
          />
        </div>

      </div>

      {/* No Bookings */}
      {bookings.length === 0 ? (
        <div className="mt-6 rounded-2xl bg-slate-50 p-6 text-center">

          <Calendar
            size={32}
            className="mx-auto text-slate-400"
          />

          <p className="mt-3 font-semibold text-slate-700">
            No upcoming sessions
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Book a session with a mentor to see it here.
          </p>

        </div>
      ) : (

        /* Bookings */
        <div className="mt-6 space-y-4">

          {bookings.map((booking) => (

            <div
              key={booking.id}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >

              {/* Mentor Info */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600">
                    {booking.mentorName.charAt(0)}
                  </div>

                  <div>

                    <h3 className="font-bold text-slate-900">
                      {booking.mentorName}
                    </h3>

                    <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                      <UserRound size={15} />
                      Mentor Session
                    </div>

                  </div>

                </div>

                {/* Status */}
                <span className="inline-flex w-fit items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  <CheckCircle2 size={14} />
                  {booking.status}
                </span>

              </div>

              {/* Date & Time */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                <div className="flex items-center gap-3 rounded-xl bg-white p-3">

                  <Calendar
                    size={18}
                    className="text-blue-600"
                  />

                  <div>
                    <p className="text-xs text-slate-400">
                      Date
                    </p>

                    <p className="text-sm font-semibold text-slate-700">
                      {booking.date}
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3 rounded-xl bg-white p-3">

                  <Clock
                    size={18}
                    className="text-blue-600"
                  />

                  <div>
                    <p className="text-xs text-slate-400">
                      Time
                    </p>

                    <p className="text-sm font-semibold text-slate-700">
                      {booking.time}
                    </p>
                  </div>

                </div>

              </div>

              {/* Message */}
              {booking.message && (
                <div className="mt-4 rounded-xl bg-white p-4">

                  <p className="text-xs font-semibold text-slate-400">
                    Discussion Topic
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {booking.message}
                  </p>

                </div>
              )}

              {/* Cancel */}
              <button
                onClick={() => cancelBooking(booking.id)}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition hover:text-red-700"
              >
                <XCircle size={17} />
                Cancel Session
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default UpcomingSessionsCard;