import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const PhotoCard = ({ photo }) => {
  return (
    <div>
      <Card className="border rounded-lg">
        <div className="relative w-full aspect-square">
          <Image
            src={photo.imageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px)"
            alt={photo.title}
            className="rounded-lg object-cover"
          ></Image>
          <Chip className="absolute right-2 top-2"> {photo.title} </Chip>
        </div>
        <div>
          <h2 className="font-semibold"> {photo.title} </h2>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <p>
              <FaHeart />
            </p>
            <p>{photo.likes}</p>
          </div>

          <div className="flex items-center gap-2">
            <p>
              <FaDownload />
            </p>
            <p>{photo.downloads}</p>
          </div>
        </div>
        <Button variant="outline" className={'w-full'}>View</Button>
      </Card>
    </div>
  );
};

export default PhotoCard;
