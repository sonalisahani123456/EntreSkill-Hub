import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularProgress({ value, text }) {
  return (
    <div className="w-40 h-40">
      <CircularProgressbar
        value={value}
        text={text}
        strokeWidth={10}
        styles={buildStyles({
          pathColor: "#2563EB",
          textColor: "#0F172A",
          trailColor: "#E2E8F0",
        })}
      />
    </div>
  );
}

export default CircularProgress;