import { useState } from "react";
import { Target, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SkillAssessment() {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      question: "How confident are you in identifying a business opportunity?",
      options: [
        "Not confident",
        "Slightly confident",
        "Moderately confident",
        "Very confident",
        "Extremely confident",
      ],
    },
    {
      id: 2,
      question: "How would you rate your communication skills?",
      options: [
        "Needs improvement",
        "Basic",
        "Average",
        "Good",
        "Excellent",
      ],
    },
    {
      id: 3,
      question: "How comfortable are you with solving problems creatively?",
      options: [
        "Not comfortable",
        "Slightly comfortable",
        "Moderately comfortable",
        "Very comfortable",
        "Extremely comfortable",
      ],
    },
    {
      id: 4,
      question: "How well do you understand basic financial planning?",
      options: [
        "I don't understand it",
        "Beginner",
        "Basic understanding",
        "Good understanding",
        "Excellent understanding",
      ],
    },
    {
      id: 5,
      question: "How confident are you in marketing a product or service?",
      options: [
        "Not confident",
        "Slightly confident",
        "Moderately confident",
        "Very confident",
        "Extremely confident",
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[currentQuestion];

  const handleAnswer = (optionIndex) => {
    setAnswers((previous) => ({
      ...previous,
      [question.id]: optionIndex + 1,
    }));
  };

  const handleNext = () => {
    if (!answers[question.id]) {
      alert("Please select an answer before continuing.");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
    } else {
      calculateScore();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((previous) => previous - 1);
    }
  };

  const calculateScore = () => {
  const totalScore = Object.values(answers).reduce(
    (sum, value) => sum + value,
    0
  );

  const maximumScore = questions.length * 5;

  const calculatedScore = Math.round(
    (totalScore / maximumScore) * 100
  );

  // Save score
  localStorage.setItem(
    "skillScore",
    calculatedScore.toString()
  );

  setScore(calculatedScore);
  setCompleted(true);
};

  if (completed) {
    return (
      <div className="min-h-screen bg-slate-100 px-6 py-10">
        <div className="mx-auto max-w-3xl">

          <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2
                size={42}
                className="text-green-600"
              />
            </div>

            <h1 className="mt-6 text-3xl font-bold text-slate-900">
              Assessment Completed!
            </h1>

            <p className="mt-3 text-slate-500">
              Your entrepreneurial skill assessment has been completed.
            </p>

            <div className="mx-auto mt-8 max-w-sm rounded-2xl bg-blue-50 p-6">
              <p className="text-sm font-medium text-slate-500">
                Your Skill Score
              </p>

              <p className="mt-2 text-5xl font-bold text-blue-600">
                {score}%
              </p>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={() => navigate("/dashboard")}
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Back to Dashboard
              </button>

              <button
                onClick={() => {
                  setAnswers({});
                  setCurrentQuestion(0);
                  setCompleted(false);
                  setScore(0);
                }}
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Retake Assessment
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  const selectedAnswer = answers[question.id];

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-3xl">

        {/* Back */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 flex items-center gap-2 text-slate-600 transition hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        {/* Header */}
        <div className="rounded-t-3xl bg-blue-600 p-8 text-white">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white/20 p-3">
              <Target size={30} />
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                Skill Assessment
              </h1>

              <p className="mt-1 text-blue-100">
                Discover your entrepreneurial strengths.
              </p>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white px-8 pt-6">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>

            <span className="font-semibold text-blue-600">
              {Math.round(
                ((currentQuestion + 1) / questions.length) * 100
              )}
              %
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{
                width: `${
                  ((currentQuestion + 1) / questions.length) * 100
                }%`,
              }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-white p-8">

          <h2 className="text-2xl font-bold text-slate-900">
            {question.question}
          </h2>

          <div className="mt-8 space-y-3">
            {question.options.map((option, index) => {
              const optionValue = index + 1;
              const isSelected = selectedAnswer === optionValue;

              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(index)}
                  className={`flex w-full items-center rounded-2xl border p-4 text-left transition ${
                    isSelected
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50"
                  }`}
                >
                  <span
                    className={`mr-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span className="font-medium">
                    {option}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between rounded-b-3xl bg-white p-8 pt-0">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft size={18} />
            Previous
          </button>

          <button
            onClick={handleNext}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            {currentQuestion === questions.length - 1
              ? "Finish"
              : "Next"}

            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}

export default SkillAssessment;