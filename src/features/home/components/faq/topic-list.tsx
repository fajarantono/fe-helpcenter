import Image from 'next/image';
import Link from 'next/link';

export const TopicList = (props: { icon: string; label: string; slug: string }) => {
  return (
    <>
      <Link
        href={`/topic/${props.slug}`}
        className="text-gray-900 bg-white dark:bg-slate-800 border-2xl border-gray-100 rounded-lg ring-1 ring-slate-900/5 shadow-xl dark:border-white px-6 py-8 flex items-center gap-4 font-bold cursor-pointer"
      >
        <div>
          <Image src={props.icon} alt="icon" quality={100} width={30} height={30} />
        </div>
        <h3 className="text-slate-900 dark:text-white text-base font-bold tracking-tight">
        {props.label}
        </h3>
      </Link>
    </>
  );
};
