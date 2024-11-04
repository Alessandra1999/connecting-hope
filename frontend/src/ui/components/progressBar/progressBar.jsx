export function ProgressBar({ progress, totalBars }) {
  const barMultiplier = 100 / totalBars;
  const roundedProgress = Math.ceil(progress / barMultiplier) * barMultiplier;

  return (
    <div className="w-full border-2 border-white h-14 rounded-lg p-1 grid grid-flow-col gap-1">
      {Array.from(Array(totalBars)).map((_, idx) => {
        const bgOpacity =
          (idx + 1) * barMultiplier > roundedProgress ? 'opacity-50' : '';

        return (
          <div
            key={`bar-${idx}`}
            className={`rounded-lg bg-primary-dark-500 ${bgOpacity}`}
          />
        );
      })}
    </div>
  );
}
