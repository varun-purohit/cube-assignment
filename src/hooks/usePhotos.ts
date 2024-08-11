import { useState, useEffect } from "react";
import axios from "axios";

const key = "k-xfqsj9ss05ttySp_EM0L3bF_DVwmcp1uNUvjoBgkM";

export function usePhotos(id: string) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?count=9&client_id=${key}`
        );
        const photoUrls = response.data.map((photo: any) => photo.urls.small);
        setTimeout(() => {
          setPhotos(photoUrls);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching photos:", error);
        setError("Failed to fetch photos");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [id]);

  return { photos, loading, error };
}
