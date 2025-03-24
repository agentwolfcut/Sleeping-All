import ImageCard from "../ImageCard";

export default function FloatingImages({ images, search }) {
  return (
    <div className="relative flex flex-wrap justify-center gap-4 overflow-hidden">
      {images
        .filter((img) => img.name.toLowerCase().includes(search.toLowerCase()))
        .map((img, index) => (
          <ImageCard key={index} img={img} />
        ))}
    </div>
  );
}
