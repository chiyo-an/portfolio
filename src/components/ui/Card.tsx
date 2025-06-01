interface CardProps {
  image?: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ image, title }) => (
  <img 
    src={image || 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop'} 
    alt={title}
    className="w-full h-48 object-cover grayscale transition-all duration-300"
  />
);

export default Card;
