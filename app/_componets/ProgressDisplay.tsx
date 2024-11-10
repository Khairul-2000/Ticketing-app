const ProgressDisplay = ({ progress }: { progress: string }) => {
  return (
    <div className="h-2.5 w-full rounded-full bg-gray-200">
      <div
        className="h-2.5 rounded-full bg-blue-600"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
