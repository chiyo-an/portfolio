interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-[150px] h-[20px] bg-primary rounded-full overflow-hidden mx-auto border border-sub-point">
      <div 
        className="h-full bg-sub-point rounded-full transition-transform duration-100 ease-out origin-left"
        style={{ 
          transform: `scaleX(${progress / 100})`,
          willChange: 'transform'
        }}
      />
    </div>
  );
} 