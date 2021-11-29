import Image from "next/image";

export const CustomImage = (props: any) => {
  console.log(props);
  return (
    <div className="w-full">
      <Image
        src={props.src}
        className={props.className}
        width="100%"
        height="50%"
        layout="responsive"
        objectFit="contain"
        alt={props.alt}
        placeholder="blur"
        blurDataURL={props.src}
      />
    </div>
  );
};
