interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-[150px] h-[20px] bg-primary rounded-full overflow-hidden mx-auto border border-sub-point">
      <div 
        className="h-full bg-sub-point rounded-full transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
} 