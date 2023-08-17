
export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder,
    customClass,
    groupClass,
}){
  const fixedInputClass = 'w-full block rounded-md border-2 border-transparent bg-white py-2 ring-inset text-sm leading-6 my-4 ring-white bg-white-900 bg-opacity-5 outline-0 px-2 focus:border-blue-500 focus:border-2 focus:border-solid ';
  const fixedgroupClass = 'col-span-3';  
    return(
      <div className={groupClass? groupClass : fixedgroupClass}>
      <label htmlFor={labelFor} className="block leading-6 font-medium text-sm">{labelText}</label>
          <input
             onChange={handleChange}
             value={value}
             id={id}
             name={name}
             type={type}
             required={isRequired}
             className={fixedInputClass+customClass}
             placeholder={placeholder}
           />
      </div>
    )
}