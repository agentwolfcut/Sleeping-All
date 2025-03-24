import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ImageCard({ img }) {
  return (
    <motion.div
      className="w-40 h-40 rounded-xl overflow-hidden shadow-lg"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <Card className="bg-white p-2 text-black text-center">
        <CardContent>
          <img src={URL.createObjectURL(img.file)} alt={img.name} className="w-full h-24 object-cover" />
          <p className="font-bold mt-2">{img.name}</p>
          <p className="text-xs text-gray-500">By {img.reporter}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
