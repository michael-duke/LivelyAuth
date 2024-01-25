import Image from 'next/image';
import wondersImages from '../../wonders';
import Modal from '@/components/modal';

export default function PhotoPage({ params: { id: photoId } }) {
  const photo = wondersImages.find((p) => p.id === photoId);

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square "
      />

      <div className="bg-white py-4">
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
