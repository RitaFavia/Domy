import React from 'react';

const MemoryView = ({ memory, date, onClose }) => {
  if (!memory) return null;
  
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto slide-in">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">{formatDate(date)}</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4 md:p-6">
          {/* Memory text */}
          <div className="mb-6">
            <p className="text-gray-700 text-lg whitespace-pre-line">{memory.text}</p>
          </div>
          
          {/* Photos */}
          {memory.photos && memory.photos.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Photos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {memory.photos.map((photo, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={photo} 
                      alt={`Memory from ${date} - ${index + 1}`} 
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Videos */}
          {memory.videos && memory.videos.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Videos</h3>
              <div className="grid grid-cols-1 gap-4">
                {memory.videos.map((video, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md">
                    <video 
                      src={video} 
                      controls
                      className="w-full h-auto"
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemoryView;