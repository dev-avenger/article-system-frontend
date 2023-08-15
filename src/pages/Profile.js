export default function ProfilePage() {
    const marginXNegative = {
        marginLeft: "-0.5rem",
        marginRight: "-0.5rem",
    };
    const profileText ={
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0"
    }
    return (
        <>
            <div className="opacity-100	bg-emerald-50 overflow-y-auto">
                <div>
                <div className="flex flex-col fixed inset-y-0 left-0 z-0 bg-indigo-100 w-72">
                    <div className="flex flex-col grow gap-8 px-6 ring-offset-current ring-current">
                        <div className="flex h-16 shrink-0 items-center">
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=500" alt="Your Company"/>
                        </div>
                        <nav className="flex flex-col flex-1">
                            <ul className="flex flex-col flex-1 row-gap-7 list-none p-0 m-0">
                                <li>
                                    <ul className="list-none p-0 m-0" style={marginXNegative}>
                                        <li>
                                           <a className="flex column-gap-3 p-2 rounded-md text-sm font-semibold leading-6 no-underline">
                                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6 shrink-0 pr-2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
                                            </svg>
                                            <span className="px-2">
                                                News Feed
                                            </span>                                                
                                            </a> 
                                        </li>
                                        <li>
                                           <a className="flex column-gap-3 p-2 rounded-md text-sm font-semibold leading-6 no-underline">
                                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6 shrink-0 pr-2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
                                            </svg>
                                            <span className="px-2">
                                                Articles
                                            </span>                                                
                                            </a> 
                                        </li>
                                        <li>
                                           <a className="flex column-gap-3 p-2 rounded-md text-sm font-semibold leading-6 no-underline">
                                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6 shrink-0 pr-2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
                                            </svg>
                                            <span className="px-2">
                                                Settings
                                            </span>                                                
                                            </a> 
                                        </li>
                                    </ul>
                                </li>
                                <li className="mt-auto" style={marginXNegative}>
                                    <a className="flex items-center leading-6 font-semibold text-sm py-3 px-6 gap-x-4 no-underline opacity-100">
                                        <img className="w-8	h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                                        <span style={profileText}>Your profile</span>
                                        <span>Tom Cook</span>  
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="pl-72">
                    <div className="flex items-center h-16 px-8 border-b z-40 gap-x-6 sticky top-0">

                    </div>
                    <main>
                        <header className="border-b">
                            <nav className="flex overflow-x-auto py-4">
                                <ul className="flex flex-none gap-x-6 min-w-full px-8 text-sm font-semibold list-none leading-6">
                                    <li><a className="no-underline">Profile</a></li>
                                </ul>
                            </nav>
                        </header>
                        <div>
                            <div className="grid grid-cols-3 max-w-7xl gap-x-8 gap-y-10 py-16">
                                <div>
                                    <h2 class="text-sm text-base leading-7">Personal Information</h2>
                                    <p class="text-sm leading-6 mt-1">Use a permanent address where you can receive mail.</p>
                                </div>
                                <form className="col-span-2">
                                    <div className="grid grid-cols-6 gap-y-8 gap-x-6 max-w-xl">
                                        <div className="flex items-center col-span-full gap-x-8">
                                            <img className="flex-none w-24 h-24 max-w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                                            <div>
                                                <button type="button" class="rounded-md text-sm leading-5 font-semibold normal-case py-2 px-3 text-white bg-slate-500 cursor-pointer">Change avatar</button>
                                                <p class="leading-5 text-xs mt-2">JPG, GIF or PNG. 1MB max.</p>
                                            </div>
                                        </div>
                                        <div className="col-span-3">
                                            <label for="first-name" className="block leading-6 font-medium text-sm">First name</label>
                                            <div className="mt-2">
                                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="w-full focus:border-blue border-2 border-solid block rounded-md border-0 bg-white py-1.5 ring-inset text-sm leading-6 ring-white"/>
                                            </div>
                                        </div>
                                        <div className="col-span-3">
                                            <label for="last-name" className="block leading-6 font-medium text-sm">Last name</label>
                                            <div className="mt-2">
                                                <input type="text" name="last-name" id="first-name" autocomplete="given-name" className="w-full focus:border-emerald-600 block rounded-md border-0 bg-white py-1.5 ring-inset text-sm leading-6 ring-white"/>
                                            </div>
                                        </div>
                                        <div className="col-span-full">
                                            <label for="email" className="block leading-6 font-medium text-sm">Email</label>
                                            <div className="mt-2">
                                                <input type="text" name="email" id="first-name" autocomplete="given-name" className="w-full focus:border-emerald-600 block rounded-md border-0 bg-white py-1.5 ring-inset text-sm leading-6 ring-white"/>
                                            </div>
                                        </div>
                                        <div className="col-span-full">
                                            <label for="username" className="block leading-6 font-medium text-sm">Username</label>
                                            <div className="mt-2">
                                                <input type="text" name="username" id="username" autocomplete="given-name" className="w-full focus:border-emerald-600 block rounded-md border-0 bg-white py-1.5 ring-inset text-sm leading-6 ring-white"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-8">
                                        <button type="submit" class="text-white bg-slate-500 leading-5 py-2 px-3 rounded-md font-semibold text-sm">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </main>
                </div>
                </div>
            </div> 
        </>
    )
}