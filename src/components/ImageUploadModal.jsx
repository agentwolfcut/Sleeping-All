import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ImageUploadModal({ newImage, setNewImage, setShowModal, handleAddImage }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg text-black w-96">
        <h2 className="text-xl font-bold mb-4">Add New Sleeping Case</h2>
        <Input
          placeholder="Image Name"
          value={newImage.name}
          onChange={(e) => setNewImage({ ...newImage, name: e.target.value })}
          className="mb-2"
        />
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setNewImage({ ...newImage, file: e.target.files[0] })}
          className="mb-2"
        />
        <Input
          placeholder="Reporter Name"
          value={newImage.reporter}
          onChange={(e) => setNewImage({ ...newImage, reporter: e.target.value })}
          className="mb-4"
        />
        <div className="flex justify-end gap-2">
          <Button onClick={() => setShowModal(false)} className="bg-gray-400">Cancel</Button>
          <Button onClick={handleAddImage} className="bg-blue-500">Add</Button>
        </div>
      </div>
    </div>
  );
}
