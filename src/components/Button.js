export default function Button({
    handleSubmit,
    action='submit',
    text,
    customClass
}){
    const fixedInputClass="text-white bg-blue-500 leading-5 py-2 px-3 rounded-md font-semibold text-sm hover:bg-opacity-90 hover:border-0 ";
    return(
        <>
            <button
                type={action}
                className={fixedInputClass+customClass}
                onSubmit={handleSubmit}
            >
                {text}
            </button>
        </>
    )
}