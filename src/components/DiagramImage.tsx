import Image from "next/image";

interface DiagramImageProps {
  image: string;
}

const DiagramImage = ({ image }: DiagramImageProps) => {
  return (
    <div className="">
      <Image
        src={`/diagram/${image}`}
        alt={image}
        width={1000}
        height={1000}
        layout="responsive"
      />
    </div>
  );
};

export default DiagramImage;
