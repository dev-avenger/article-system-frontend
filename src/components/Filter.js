import { useState } from 'react';
export default function Filter({
    categoryName,
    listofSubCategories,
}){

    const [toggleState,setToggleState]=useState(true);

    const handleChange=(e)=>{
        setToggleState(e.target.value)
    }

    const handleToggle = (e) => {
        setToggleState(!toggleState)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{

    }
    return(
        <>
<div x-data="{ open: false }" className="border-b border-gray-200 py-6">
<h3 className="-my-3 flow-root">
  <button type="button" x-description="Expand/collapse section button" className="flex w-full items-center justify-between bg-white py-3 px-3 text-sm text-gray-400 hover:text-gray-500 rounded" aria-controls="filter-section-1" onClick={handleToggle} aria-expanded="false">
    <span className="font-medium text-gray-900">{categoryName}</span>
    <span className="ml-6 flex items-center">
      <svg className="h-5 w-5" x-description="Expand icon, show/hide based on section open state." style={{ display: toggleState ? 'block': 'none'}} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
</svg>
      <svg className="h-5 w-5" x-description="Collapse icon, show/hide based on section open state." x-show="open" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ display: toggleState ? 'none': 'block'}}>
<path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd"></path>
</svg>
    </span>
  </button>
</h3>
<div className="pt-6" x-description="Filter section, show/hide based on section state." id="filter-section-1" x-show="open" style={{ display: toggleState ? 'none': 'block'}}>
  <div className="space-y-4">
     {
        listofSubCategories.map(subCategory => {
            <div className="flex items-center">
                <input id="filter-category-0" name={subCategory.name} value="new-arrivals" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                <label for="filter-category-0" className="ml-3 text-sm text-gray-600">{subCategory.label}</label>
          </div>
        })
     
     }    
  </div>
</div>
</div>
        </>
    )
}