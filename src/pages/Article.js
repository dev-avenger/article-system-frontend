export default function ArticlePage() {
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
                        <button type="button" className="p-2.5 cursor-pointer bg-none bg-transparent normal-case" style={{margin: '-0.625rem'}}>
                            <span style={profileText}>Open sidebar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd">
                                </path>
                            </svg>
                        </button>
                        <div className="flex flex-1 self-stretch gap-x-6">
                            <form className="flex flex-1" action="#" method="GET">
                                <label for="search-field" style={profileText}>Search</label>
                                <div className="relative w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="absolute pointer-events-none inset-y-0 left-0	h-full w-5">
                                        <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"></path>
                                    </svg>
                                    <input id="search-field" className="block text-sm leading-5 h-full w-full border-0 bg-transparent py-0 pr-0 pl-8" style={{outlineOffset: "-2px"}} placeholder="Search..." type="search" name="search"/>
                                </div>
                            </form>
                        </div>
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
                                <div className="col-span-2">
                                    <div className="grid grid-cols-6 gap-y-8 gap-x-6 max-w-xl">
                                        <div className="flex items-center col-span-full gap-x-8">
                                            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/img/card-left.jpg')"}} title="Woman holding a mug">
                                        </div>
                                        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                            <div className="mb-8">
                                            <p className="text-sm text-gray-600 flex items-center">
                                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                                </svg>
                                                Members only
                                            </p>
                                            <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                                            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                            </div>
                                            <div className="flex items-center">
                                            <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
                                            <div className="text-sm">
                                                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                                                <p className="text-gray-600">Aug 18</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-6 gap-y-8 gap-x-6 max-w-xl">
                                        <div className="flex items-center col-span-full gap-x-8">
                                            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/img/card-left.jpg')"}} title="Woman holding a mug">
                                        </div>
                                        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                            <div className="mb-8">
                                            <p className="text-sm text-gray-600 flex items-center">
                                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                                </svg>
                                                Members only
                                            </p>
                                            <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                                            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                            </div>
                                            <div className="flex items-center">
                                            <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
                                            <div className="text-sm">
                                                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                                                <p className="text-gray-600">Aug 18</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-6 gap-y-8 gap-x-6 max-w-xl">
                                        <div className="flex items-center col-span-full gap-x-8">
                                            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('/img/card-left.jpg')"}} title="Woman holding a mug">
                                        </div>
                                        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                            <div className="mb-8">
                                            <p className="text-sm text-gray-600 flex items-center">
                                                <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                                </svg>
                                                Members only
                                            </p>
                                            <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                                            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                                            </div>
                                            <div className="flex items-center">
                                            <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
                                            <div className="text-sm">
                                                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                                                <p className="text-gray-600">Aug 18</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-sm text-base leading-7">Personal Information</h2>
                                    <p className="text-sm leading-6 mt-1">Use a permanent address where you can receive mail.</p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                </div>
            </div> 
        </>
    )
}