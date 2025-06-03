export default function LoadingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-sub-point rounded-full opacity-5"
        style={{
          transform: 'translate(-50%, -50%)',
          filter: 'blur(60px)'
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-pure-black rounded-full opacity-5"
        style={{
          transform: 'translate(50%, 50%)',
          filter: 'blur(40px)'
        }}
      />
    </div>
  );
} 