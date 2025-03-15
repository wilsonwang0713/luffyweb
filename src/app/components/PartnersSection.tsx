'use client';

import CircularGallery from './CircularGallery';

interface PartnersSectionProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}

export default function PartnersSection({
  title = "Our Partners",
  subtitle = "We collaborate with industry leaders to deliver exceptional solutions",
  backgroundColor = "bg-light"
}: PartnersSectionProps) {
  return (
    <section className={`section ${backgroundColor}`}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{subtitle}</p>
        
        <div className="partners-gallery">
          <CircularGallery 
            items={[
              {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
                text: "AWS"
              },
              {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
                text: "Microsoft"
              },
              {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
                text: "Google"
              },
              {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
                text: "Apple"
              },
              {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png",
                text: "OpenAI"
              },
              {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
                text: "Samsung"
              }
            ]}
            bend={3}
            textColor="#333333"
            borderRadius={0.05}
            font="bold 24px Inter"
          />
        </div>
      </div>
    </section>
  );
} 