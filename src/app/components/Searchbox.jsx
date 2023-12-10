"use client";
import {useState} from 'react';
import {useRouter} from 'next/navigation';



export default function Searchbox() {
  const [search, setSearch] = useState("")
  const router= useRouter();

  const handleSubmit = (e) => {
  e.preventDefault();
  if(!search) return;
    router.push(`/search/${search}`);
}
  return (
    <form onSubmit={handleSubmit} className='flex max-w-3xl mt-3 mx-auto justify-between items-center px-5 border-2 border-slate-400 rounded-full'>
      <input className='h-14 w-full rounded-sm  outline-none  flex-1 bg-transparent' type='text' placeholder='Search for movie' value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button type='submit' className=' disabled:text-gray-400 hover:text-blue-400'>Search</button>
    </form>

   
  )
}
