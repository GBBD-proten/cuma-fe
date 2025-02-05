
type FillButtonProps = {
    text: string;
    onClick: () => void;
    select?: boolean;
};

const FillButton = ({ text, select, onClick }: FillButtonProps) => {

    return (
        <div className={`
            rounded-full bg-slate-200 p-2 flex justify-center w-full relative cursor-pointer
        ${select ? 'bg-slate-800 text-white' : 'text-slate-800'}
            `}
            onClick={onClick}>
            {text}
        </div>
    );
}


export default FillButton;