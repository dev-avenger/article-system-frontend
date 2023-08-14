export default function Button({
    handleSubmit,
    action='submit',
    text
}){
    return(
        <>
            <button
                type={action}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 mt-10"
                onSubmit={handleSubmit}
            >
                {text}
            </button>
        </>
    )
}