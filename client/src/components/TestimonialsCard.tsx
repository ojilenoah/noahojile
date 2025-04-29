import { FaQuoteLeft } from "react-icons/fa";

// Interface for testimonial items
interface Testimonial {
  name: string;
  occupation: string;
  text: string;
}

// Mobile height adjustments for the testimonial card
const TESTIMONIAL_ROW_HEIGHT = "95px";

// Authentic testimonials from Nigerian students
const testimonials: Testimonial[] = [
  {
    name: "Ahmad Iman",
    occupation: "CS Student @ Nile University Abuja",
    text: "The code review you gave me fixed my authentication system. You spotted bugs I couldn't see for weeks."
  },
  {
    name: "Abubakar Ibrahim",
    occupation: "CS Student @ Nile University Abuja",
    text: "Your blockchain course opened my eyes to Web3 development. Now I'm building my first dApp with confidence."
  },
  {
    name: "Musa Abdullahi",
    occupation: "Computer Engineering Student",
    text: "Thanks for reviewing my final year project. Your insights on the database design were invaluable."
  },
  {
    name: "Blessing Okafor",
    occupation: "Self-taught Developer",
    text: "The debugging session we had saved my e-commerce project. You explained every step clearly."
  },
  {
    name: "Ibrahim Mohammed",
    occupation: "CS Student",
    text: "Your explanation of REST APIs finally made it click for me. I can now build my own backend services."
  },
  {
    name: "Chidi Nwachukwu",
    occupation: "Bootcamp Graduate",
    text: "The portfolio feedback you gave helped me land my first interview. Thanks for the detailed review."
  },
  {
    name: "Fatima Suleiman",
    occupation: "IT Student",
    text: "Your Python data analysis workshop completely changed how I approach my research project. Thank you!"
  }
];

// TestimonialItem for horizontal scrolling
const TestimonialItem = ({ name, occupation, text, compact = false }: Testimonial & { compact?: boolean }) => {
  return (
    <div 
      className={`testimonial-item mx-2 px-3 py-2 border border-accent/20 rounded-lg bg-accent/5 whitespace-normal`}
      style={{ 
        width: '300px', 
        height: TESTIMONIAL_ROW_HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div className="flex items-center">
        <FaQuoteLeft className="text-accent mr-1 text-xs" />
        <div>
          <p className="text-xs font-mono font-bold theme-text-primary">
            {name} <span className="font-normal text-secondary">• {occupation}</span>
          </p>
        </div>
      </div>
      <div className="text-xs theme-text-primary mt-1">
        <p className="line-clamp-3">{text}</p>
      </div>
    </div>
  );
};

interface TestimonialsCardProps {
  inGrid?: boolean;
}

export default function TestimonialsCard({ inGrid = false }: TestimonialsCardProps) {
  if (inGrid) {
    // For grid layout with double lines scrolling in opposite directions
    return (
      <div 
        className="bg-cardBg p-0 h-full border border-accent/20 overflow-hidden w-full card-rounded"
        style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.25))' }}
      >
        <div 
          className="flex items-center px-4 py-1 border-b"
          style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.25))' }}>
          <h2 className="text-base font-sequel theme-text-primary">WHAT PEOPLE SAY</h2>
        </div>
        
        <div className="flex flex-col h-[calc(100%-32px)]">
          {/* First row - scrolls left to right */}
          <div className="relative overflow-hidden flex-1 flex items-center" style={{ minHeight: TESTIMONIAL_ROW_HEIGHT }}>
            <div className="testimonial-scroll-right absolute flex animate-scroll" style={{ width: "max-content" }}>
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <TestimonialItem 
                  key={`testimonial-top-${index}`} 
                  name={testimonial.name} 
                  occupation={testimonial.occupation} 
                  text={testimonial.text}
                  compact={true}
                />
              ))}
              {/* Duplicate for seamless scrolling */}
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <TestimonialItem 
                  key={`testimonial-top-dup-${index}`} 
                  name={testimonial.name} 
                  occupation={testimonial.occupation} 
                  text={testimonial.text}
                  compact={true}
                />
              ))}
            </div>
          </div>
          
          {/* Second row - scrolls right to left */}
          <div className="relative overflow-hidden flex-1 flex items-center" style={{ minHeight: TESTIMONIAL_ROW_HEIGHT }}>
            <div className="testimonial-scroll-left absolute flex animate-scroll-reverse" style={{ width: "max-content" }}>
              {testimonials.slice(3).map((testimonial, index) => (
                <TestimonialItem 
                  key={`testimonial-bottom-${index}`} 
                  name={testimonial.name} 
                  occupation={testimonial.occupation} 
                  text={testimonial.text}
                  compact={true}
                />
              ))}
              {/* Duplicate for seamless scrolling */}
              {testimonials.slice(3).map((testimonial, index) => (
                <TestimonialItem 
                  key={`testimonial-bottom-dup-${index}`} 
                  name={testimonial.name} 
                  occupation={testimonial.occupation} 
                  text={testimonial.text}
                  compact={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } 
  
  // Default horizontal testimonials for bottom of page
  return (
    <div className="bg-transparent p-0 h-auto overflow-hidden w-full card-rounded">
      <div className="flex items-center px-4 pt-2 pb-1">
        <h2 className="text-base font-mono theme-text-primary">What people have to say</h2>
      </div>
      
      <div className="relative overflow-hidden h-[105px] flex items-center">
        <div className="testimonial-scroll absolute flex animate-scroll" style={{ width: "max-content" }}>
          {testimonials.map((testimonial, index) => (
            <TestimonialItem 
              key={`testimonial-${index}`} 
              name={testimonial.name} 
              occupation={testimonial.occupation} 
              text={testimonial.text} 
            />
          ))}
          {/* Duplicate items for seamless scrolling */}
          {testimonials.map((testimonial, index) => (
            <TestimonialItem 
              key={`testimonial-dup-${index}`} 
              name={testimonial.name} 
              occupation={testimonial.occupation} 
              text={testimonial.text} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}