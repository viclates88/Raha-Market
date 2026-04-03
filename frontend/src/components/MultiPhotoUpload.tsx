import { useState } from "react";
import { Upload } from "lucide-react";

interface Props { onImagesChange: (files: File[]) => void; }

export default function MultiPhotoUpload({ onImagesChange }: Props) {
  const [previews, setPreviews] = useState<string[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 5) return alert("Maksimal 5 foto!");
    onImagesChange(files);

    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviews(previewUrls);
  };

  return (
    <div className="space-y-4">
      <label className="cursor-pointer block border-2 border-dashed border-orange-400 dark:border-orange-500 rounded-3xl p-8 text-center hover:bg-orange-50 dark:hover:bg-gray-800">
        <Upload className="mx-auto text-orange-500" size={40} />
        <p className="mt-3 text-sm font-medium">Upload foto (max 5)</p>
        <input type="file" multiple accept="image/*" onChange={handleUpload} className="hidden" />
      </label>
      {previews.length > 0 && (
        <div className="grid grid-cols-5 gap-2">
          {previews.map((url, i) => (
            <img key={i} src={url} alt={`preview ${i}`} className="w-full h-20 object-cover rounded-2xl" />
          ))}
        </div>
      )}
    </div>
  );
}