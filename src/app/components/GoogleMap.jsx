import React from 'react';

const GoogleMap = () => {
    return (
        <div className="google-map relative">
            <iframe
                id='gmap_canvas'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123584.51454233027!2d120.38524693750973!3d14.541072956925866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33963d7cb29a5cef%3A0xf580340847606f2d!2sDuale%2C%20Bataan%2C%20Philippines!5e0!3m2!1sen!2sin!4v1737904400310!5m2!1sen!2sin" style={{ border: 0, width: '100%', height: '400px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            

            <div
              style={{
                backgroundImage: "linear-gradient(180deg, transparent 20%, #1a1a1a  80%)",
              }}
              className="absolute bottom-10 w-full h-[50px] z-50"
            ></div>
            <div
              style={{
                backgroundImage: "linear-gradient(0deg, transparent 20%, #1a1a1a  80%)",
              }}
              className="absolute top-0 w-full h-[40px] z-50"
            ></div>
        </div>
    );
};

export default GoogleMap;
