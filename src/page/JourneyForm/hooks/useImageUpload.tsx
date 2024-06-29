import { useState } from 'react';

const useImageUpload = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (event:any) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file)); // Untuk menampilkan preview gambar di client-side
    }
  };

  const resetImage = () => {
    setImage(null);
    setImageUrl('');
  };

  return { image, imageUrl, handleImageChange, resetImage };
};

export default useImageUpload;
