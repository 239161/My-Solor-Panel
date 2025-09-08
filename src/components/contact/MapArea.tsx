
import React from 'react';

const MapArea = () => {
  return (
    <>
   <div className="map-area">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3439.0000573198067!2d77.76116057556992!3d30.464436474714788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDI3JzUyLjAiTiA3N8KwNDUnNDkuNSJF!5e0!3m2!1sen!2sin!4v1754480685599!5m2!1sen!2sin"
              width="1920"
              height="800"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MapArea;