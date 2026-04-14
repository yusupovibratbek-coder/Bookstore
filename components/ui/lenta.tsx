import React from "react";

const LOGOS = [
  "https://tse2.mm.bing.net/th/id/OIP.vQbJm2pPMEYw7bf6JDzi8gAAAA?w=279&h=445&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1677818840i/30163433.jpg",
  "https://tse2.mm.bing.net/th/id/OIP.D7P5pws5ntcR53zi58U0UgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://tse4.mm.bing.net/th/id/OIP.D_tSv7DjRh-5DI_oAd6EbgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://m.media-amazon.com/images/I/51IiWcvgQlL.jpg",
  "https://tse1.mm.bing.net/th/id/OIP.D0HZ18LeIEnMDrmAs2Q4RgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://m.media-amazon.com/images/I/41nIApiXwIL._SY445_SX342_.jpg",
  "https://tse1.mm.bing.net/th/id/OIP.J58CGVQ8mWM9xVUngIvjTAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
];

export default function Lenta() {
  return (
    <>
      {/* Animatsiya uchun kichik style bloki */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
      `}</style>

      <div className=" overflow-hidden bg-red-500 py-8 border-y border-gray-100 rounded-4xl">
        {/* Kontentni o'ng va chapdan xiralashtirish (Fade effect) */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="animate-marquee-infinite gap-16 items-center">
          {/* Birinchi nusxa */}
          {LOGOS.concat(LOGOS).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Brand Logo"
              className="h-50 rounded-2xl w-auto object-contain grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </>
  );
}     