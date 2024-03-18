import Image from "next/image";
import IMGKeytor from '/public/icon/ic-keydriver.svg';

const BoxSolution = (props: {label: string, icon: string, desc: string}) => {
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <Image src={props.icon} alt="keytor" quality={100} width={0} height={0} className="w-12 h-auto" />
            <h3 className="text-xl font-semibold">{props.label}</h3>
            <div className="max-w-[300px]">
                <p className="text-sm text-gray-400 text-center">{props.desc}</p>
            </div>
        </div>
    )
}

export default BoxSolution;