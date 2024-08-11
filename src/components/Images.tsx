import { usePhotos } from "../hooks/usePhotos";
import Skelton from "./Skleton";

interface ImagesProp {
  id: string;
}
const Images = ({ id }: ImagesProp) => {
  const { photos, loading, error } = usePhotos(id);

  if (loading) return <Skelton />;
  if (error)
    return <div className="grid place-items-center h-full">{error}</div>;

  return (
    <div className="grid grid-cols-3 gap-4 transition-all duration-300">
      {photos.map((photo, index) => (
        <div key={index} className="aspect-square bg-slate-100 ">
          {loading ? (
            <div>
              <Skelton />
            </div>
          ) : (
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover rounded"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Images;
