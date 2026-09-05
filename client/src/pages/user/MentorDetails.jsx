import {
  ArrowLeft,
  Star,
  MessageCircle,
  Calendar,
  CheckCircle2,
  X,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import mentorData from "../../data/mentorData";

function MentorDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showBooking, setShowBooking] = useState(false);

  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    message: "",
  });

  const mentorId = location.state?.mentorId;

  const mentor =
    mentorData.find((item) => item.id === mentorId) ||
    mentorData[0];

  const handleBookingChange = (e) => {
    const { name, value } = e.target;

    setBookingData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleBookSession = (e) => {
    e.preventDefault();

    if (!bookingData.date || !bookingData.time) {
      alert("Please select date and time.");
      return;
    }

    const newBooking = {
      id: Date.now(),
      mentorId: mentor.id,
      mentorName: mentor.name,
      date: bookingData.date,
      time: bookingData.time,
      message: bookingData.message,
      status: "Confirmed",
    };

    const existingBookings =
      JSON.parse(localStorage.getItem("mentorBookings")) || [];

    const updatedBookings = [
      ...existingBookings,
      newBooking,
    ];

    localStorage.setItem(
      "mentorBookings",
      JSON.stringify(updatedBookings)
    );

    setShowBooking(false);

    setBookingData({
      date: "",
      time: "",
      message: "",
    });

    alert(
      `Session booked successfully with ${mentor.name}!`
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Back */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 flex items-center gap-2 text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        {/* Profile Header */}
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">

            {/* Avatar */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-blue-100 text-3xl font-bold text-blue-600">
              {mentor.name.charAt(0)}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-bold text-slate-900">
                  {mentor.name}
                </h1>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  Available
                </span>
              </div>

              <p className="mt-2 text-slate-500">
                {mentor.expertise}
              </p>

              <div className="mt-3 flex items-center gap-2 text-yellow-500">
                <Star
                  size={18}
                  fill="currentColor"
                />

                <span className="font-semibold">
                  {mentor.rating}
                </span>

                <span className="text-sm text-slate-400">
                  Mentor Rating
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* About */}
          <div className="space-y-6 lg:col-span-2">

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                About This Mentor
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                This mentor can help you understand your
                business challenges, improve your skills,
                validate your ideas, and create a practical
                roadmap for your entrepreneurial journey.
              </p>
            </div>

            {/* Expertise */}
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Areas of Expertise
              </h2>

              <div className="mt-5 space-y-3">
                {[
                  "Business Strategy",
                  "Startup Planning",
                  "Marketing",
                  "Customer Acquisition",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-green-600"
                    />

                    <span className="font-medium text-slate-700">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Connect Card */}
          <div className="h-fit rounded-3xl bg-white p-8 shadow-sm">

            <h2 className="text-xl font-bold text-slate-900">
              Connect With Mentor
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Get personalized guidance and discuss your
              business ideas with an experienced mentor.
            </p>

            {/* Connect */}
            <button
              onClick={() =>
                alert(
                  `Connection request sent to ${mentor.name}!`
                )
              }
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <MessageCircle size={18} />
              Connect
            </button>

            {/* Book Session */}
            <button
              onClick={() => setShowBooking(true)}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <Calendar size={18} />
              Book Session
            </button>

          </div>

        </div>

      </div>

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">

          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl">

            {/* Modal Header */}
            <div className="flex items-center justify-between">

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Book Mentor Session
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Session with {mentor.name}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowBooking(false)}
                className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
              >
                <X size={20} />
              </button>

            </div>

            {/* Form */}
            <form
              onSubmit={handleBookSession}
              className="mt-6 space-y-5"
            >

              {/* Date */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Select Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={bookingData.date}
                  onChange={handleBookingChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Time */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Select Time
                </label>

                <select
                  name="time"
                  value={bookingData.time}
                  onChange={handleBookingChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">
                    Select a time
                  </option>

                  <option value="10:00 AM">
                    10:00 AM
                  </option>

                  <option value="12:00 PM">
                    12:00 PM
                  </option>

                  <option value="2:00 PM">
                    2:00 PM
                  </option>

                  <option value="4:00 PM">
                    4:00 PM
                  </option>

                  <option value="6:00 PM">
                    6:00 PM
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  What would you like to discuss?
                </label>

                <textarea
                  name="message"
                  value={bookingData.message}
                  onChange={handleBookingChange}
                  rows="4"
                  placeholder="Tell your mentor about your business idea or problem..."
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3">

                <button
                  type="button"
                  onClick={() => setShowBooking(false)}
                  className="flex-1 rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Confirm Booking
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}

export default MentorDetails;