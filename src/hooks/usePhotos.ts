import { useState, useEffect } from "react";
import axios from "axios";
import { apiURL } from "../utils/data";

const apiKey = import.meta.env.VITE_API_KEY;

export function usePhotos(id: string) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${apiURL}${apiKey}`);
        const photoUrls = response.data.map((photo: any) => photo.urls.small);
        setPhotos(photoUrls);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching photos:", error);
        setError("Failed to fetch photos");
      }
    };

    fetchPhotos();
  }, [id]);

  return { photos, loading, error };
}
