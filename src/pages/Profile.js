export default function ProfilePage() {
    const marginXNegative = {
        marginLeft: "-0.5rem",
        marginRight: "-0.5rem",
    };
    return (
        <>
            <div className="opacity-100	bg-emerald-50 overflow-y-auto">
                <div className="flex flex-col fixed inset-y-0 left-0 z-0 bg-indigo-100 w-72">
                    <div className="flex flex-col grow gap-8 px-6 ring-offset-current ring-current">
                        <div className="flex h-16 shrink-0 items-center"></div>
                        <nav className="flex flex-col flex-1">
                            <ul className="flex flex-col flex-1 row-gap-7 list-none p-0 m-0">
                                <li>
                                    <ul className="list-none p-0 m-0" style={marginXNegative}>
                                        <li>
                                           <a className="flex column-gap-3 p-2 rounded-md text-sm font-semibold leading-6 no-underline">
                                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6 shrink-0 p-r-2"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path></svg>
                                            News Feed
                                            </a> 
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul></ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div> 
        </>
    )
}