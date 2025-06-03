'use client';

const CircularContactButton = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-8 right-8 w-[100px] h-[100px] bg-sub-point rounded-full flex items-center justify-center z-50 hover:scale-110 transition-transform duration-300 cursor-none"
    >
      <div className="relative w-full h-full">
        <svg
          className="w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circle-path"
              d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            />
          </defs>
          <text
            className="text-[12.4px] font-bold"
            fill="black"
            style={{ letterSpacing: '3px' }}
          >
            <textPath href="#circle-path" startOffset="0%">
              CONTACT ME   •   CONTACT ME   •   CONTACT ME   •   
            </textPath>
          </text>
        </svg>
      </div>
    </button>
  );
};

export default CircularContactButton; 