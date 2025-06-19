
import { useEffect, useState } from "react";

const PartnersSection = () => {
  const partners = [
    { name: "Geneaura", logo: "/images/13b76e8a-3a28-44a2-9a65-076bc07802ea.png" },
    { name: "Bangalore Bioinnovation Centre", logo: "/images/b2a19225-779c-406c-88ac-8d03db9df977.png" },
    { name: "Shewell", logo: "/images/e5c70965-bf2b-44ba-8248-a2875d564db4.png" },
    { name: "IMrobonix", logo: "/images/6b1a7a01-f1f8-4ae7-be27-8dce9e59396c.png" },
    { name: "Sri Ramachandra Innovation Incubation Centre", logo: "/images/e6f46177-2abd-4bd1-a709-4cd86bd45f15.png" },
    { name: "B-Actrol Biosciences", logo: "/images/c5b5990b-9879-4f95-a323-45fb4cede345.png" },
    { name: "Xera Robotics", logo: "/images/934c37c4-e9eb-49f9-ae73-bc13705acd49.png" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [partners.length]);

  // Create array with logos and stars
  const createItemsWithStars = () => {
    const items = [];
    partners.forEach((partner, index) => {
      // Add logo
      items.push({ type: 'logo', ...partner, key: `logo-${index}` });
      // Add star after each logo (including the last one for seamless loop)
      items.push({ type: 'star', key: `star-${index}` });
    });
    return items;
  };

  const itemsWithStars = createItemsWithStars();

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-20 md:mb-24 text-gray-800">Industrial & Academic Partners</h2>
        
        <div className="overflow-hidden">
          <div 
            className="flex items-center justify-center transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / partners.length)}%)` }}
          >
            {/* Duplicate the items for seamless scrolling */}
            {[...itemsWithStars, ...itemsWithStars].map((item, index) => (
              <div key={`${item.key}-${index}`} className="flex items-center justify-center flex-shrink-0" style={{ width: `${100 / partners.length}%` }}>
                {item.type === 'logo' ? (
                  <div className="flex items-center justify-center h-32 w-56 bg-white rounded-lg shadow-sm p-4 mx-2">
                    <img 
                      src={item.logo} 
                      alt={item.name}
                      className="max-h-28 max-w-52 object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center mx-6">
                    <svg width="32" height="32" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.0621 1.53451C22.3843 0.663891 23.6157 0.663888 23.9379 1.53451L29.3226 16.0866C29.4239 16.3603 29.6397 16.5761 29.9134 16.6774L44.4655 22.0621C45.3361 22.3843 45.3361 23.6157 44.4655 23.9379L29.9134 29.3226C29.6397 29.4239 29.4239 29.6397 29.3226 29.9134L23.9379 44.4655C23.6157 45.3361 22.3843 45.3361 22.0621 44.4655L16.6774 29.9134C16.5761 29.6397 16.3603 29.4239 16.0866 29.3226L1.53451 23.9379C0.663891 23.6157 0.663888 22.3843 1.53451 22.0621L16.0866 16.6774C16.3603 16.5761 16.5761 16.3603 16.6774 16.0866L22.0621 1.53451Z" fill="#00549F"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
