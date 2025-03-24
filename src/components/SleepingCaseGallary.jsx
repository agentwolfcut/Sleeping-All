import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import SearchBar from "./components/SearchBar";
import FloatingImages from "./components/FloatingImages";
import ImageUploadModal from "./components/ImageUploadModal";

export default function SleepingCaseGallery() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newImage, setNewImage] = useState({ name: "", file: null, reporter: "" });

  const handleAddImage = () => {
    if (newImage.name && newImage.file && newImage.reporter) {
      setImages([...images, newImage]);
      setNewImage({ name: "", file: null, reporter: "" });
      setShowModal(false);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-500 to-purple-700 min-h-screen text-white">
      <h1 className="text-5xl font-bold text-center mb-6">Sleeping Case</h1>
      <div className="flex justify-center gap-4 mb-6">
        <SearchBar search={search} setSearch={setSearch} />
        <Button className="bg-green-500 p-3" onClick={() => setShowModal(true)}>
          <Plus className="w-6 h-6" />
        </Button>
      </div>
      <FloatingImages images={images} search={search} />
      {showModal && (
        <ImageUploadModal
          newImage={newImage}
          setNewImage={setNewImage}
          setShowModal={setShowModal}
          handleAddImage={handleAddImage}
        />
      )}
    </div>
  );
}
