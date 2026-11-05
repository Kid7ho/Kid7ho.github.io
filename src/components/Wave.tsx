export function Wave({ from, to }: { from: string; to: string }) {
  return (
    <div className="wave" style={{ background: from }} aria-hidden="true">
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none" focusable="false">
        <path
          fill={to}
          d="M0 44C180 8 300 8 480 34s300 40 480 16 300-40 480-10v36H0z"
        />
      </svg>
    </div>
  );
}
