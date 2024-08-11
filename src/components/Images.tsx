import { useState, useEffect } from "react";
import axios from "axios";

const Images = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const key = "xFC0fF-uxK5OQhWG4S-hMmnqxh81zE7ypP3kglWqNEQ";

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?count=9&client_id=${key}`
      );
      console.log(response.data);

      setPhotos(response.data.map((photo: any) => photo.urls.small));
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  useEffect(() => {
    fetchPhotos();
    // const interval = setTimeout(fetchPhotos, 1000);
    // const interval = setInterval(fetchPhotos, 10000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <div key={index} className="aspect-square bg-slate-100 ">
          {photo ? (
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover rounded"
            />
          ) : (
            <div key={index} className="grid place-items-center h-full">
              Loading...
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Images;
