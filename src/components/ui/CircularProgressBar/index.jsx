/* eslint-disable react/prop-types */
const CircularProgressBar = ({ percentage }) => {
  // Calculate the strokeDasharray and strokeDashoffset based on the percentage
  const circumference = 2 * Math.PI * 40; // Assuming radius is 40
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-40 h-40">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        {/* Progress circle */}
        <circle
          className="text-indigo-500 progress-ring__circle stroke-current"
          style={{
            strokeDasharray: strokeDasharray,
            transition: 'stroke-dashoffset 0.35s',
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
          }}
          strokeWidth="10"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          strokeDashoffset={strokeDashoffset}
        ></circle>
        {/* Center text */}
        <text x="50" y="50" className="text-3xl" textAnchor="middle" alignmentBaseline="middle">
          {percentage}%
        </text>
      </svg>
    </div>
  );
}

export default CircularProgressBar;