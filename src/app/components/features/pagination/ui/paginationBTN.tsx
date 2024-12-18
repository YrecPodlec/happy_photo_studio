interface PaginationBtnProps {
    direction: "prev" | "next";
    onClick: () => void;
    disabled: boolean;
}

const PaginationBtn = ({ direction, onClick, disabled }: PaginationBtnProps) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`w-12 h-12 flex items-center justify-center rounded-full border-4 border-black bg-white text-black hover:bg-gradientStart disabled:opacity-50 xxxxs:w-6 xxxxs:h-6`}
    >
        {direction === "prev" ? "←" : "→"}
    </button>
);

export default PaginationBtn;
