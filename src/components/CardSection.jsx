import React from "react";

const Divider = () => (
  <div className="flex justify-center my-12">
    <svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 14C20 2 60 2 78 14" stroke="#8B1E3F" strokeWidth="3" fill="none"/>
    </svg>
  </div>
);

const CardSection = ({ title, items }) => (
  <section className="mb-10 animate-fadein">
    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-14 text-[#8B1E3F] border-b-4 border-[#8B1E3F] pb-4 tracking-wide uppercase drop-shadow-sm text-center" style={{letterSpacing: '0.06em'}}>
      {title}
    </h2>
    <div className="flex flex-col gap-16">
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <div
            className="group flex flex-col md:flex-row bg-[#fffafa] rounded-3xl shadow-xl border-4 border-[#8B1E3F] overflow-hidden transition-transform hover:scale-[1.025] duration-200 relative card-section"
            style={{boxShadow: '0 8px 40px 0 rgba(139,30,63,0.13)'}}
          >
            <div className="md:w-1/2 w-full relative min-h-[320px] flex items-center justify-center">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-80 md:h-[340px] object-cover object-center border-l-4 border-r-4 border-[#8B1E3F] border-double md:rounded-l-3xl md:rounded-r-none rounded-t-3xl md:rounded-t-none bg-[#f7f4ee] transition-all duration-300 shadow-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8B1E3F]/80 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end md:items-center justify-center pointer-events-none">
                <span className="font-serif text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-6 md:mb-0 px-6 text-center tracking-wider uppercase" style={{letterSpacing: '0.06em'}}>{item.title}</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center p-10 md:p-14">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#8B1E3F] mb-4 tracking-wide md:hidden">
                {item.title}
              </h3>
              <p className="text-[#6b5b43] text-xl md:text-2xl font-light font-sans italic leading-relaxed md:leading-loose">
                {item.description}
              </p>
            </div>
          </div>
          {idx < items.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default CardSection; 