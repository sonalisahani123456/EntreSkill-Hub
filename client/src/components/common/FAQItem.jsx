import { useState } from "react";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="font-semibold text-slate-900">
          {question}
        </span>

        <span className="text-2xl text-blue-600">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6 text-slate-600 leading-7">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FAQItem;