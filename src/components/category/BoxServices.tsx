import Image from 'next/image';
import Link from 'next/link';

const BoxServices = (props: { icon: string; label: string; slug: string }) => {
  return (
    <>
      <Link
        href={`/topic/${props.slug}`}
        className="rounded-2xl px-6 py-8 shadow-[0px_0px_10px_0px_rgba(16,24,32,.1)] flex items-center gap-4 font-bold  cursor-pointer hover:bg-gray-100 active:bg-gray-100"
      >
        <div>
          <Image src={props.icon} alt="icon" quality={100} width={30} height={30} />
        </div>
        {props.label}
      </Link>
    </>
  );
};

export default BoxServices;
