import Image from "next/image";

interface SkillItemProps {
  title: string;
  image: string;
  description: string;
  objectCover?: boolean;
}

const SkillItem = ({
  title,
  description,
  image,
  objectCover = false,
}: SkillItemProps) => {
  return (
    <div className="w-full max-w-[92.5vw] flex gap-4 justify-center">
      <div className="h-24 aspect-video relative /bg-black overflow-hidden border border-black/25 shadow rounded-sm">
        <Image
          className={`${objectCover ? "object-cover" : "object-fill"} h-full`}
          src={`/skills/${image}`}
          alt={image}
          width={700}
          height={700}
          // layout="responsive"
        />
      </div>
      <div className="flex-1 border border-black/25 bg-white/75 p-2.5 flex flex-col gap-1 rounded-md">
        <div>
          <h1 className="text-sm font-bold">{title}</h1>
        </div>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default SkillItem;
