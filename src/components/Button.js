import { ReactComponent as Spinner } from '../images/spinner.svg';

export default function Button({
    handleSubmit,
    action='submit',
    text,
    customClass,
    loading,
    disabled
}){
    const fixedInputClass="flex items-center justify-center text-white bg-blue-500 leading-5 py-2 px-3 rounded-md font-semibold text-sm hover:bg-opacity-90 hover:border-0 ";
    return(
        <>
            <button
                type={action}
                className={fixedInputClass+customClass}
                onSubmit={handleSubmit}
                disabled={disabled}
            >
                {!loading ? text : <Spinner className="spinner text-base" />}
            </button>
        </>
    )
}