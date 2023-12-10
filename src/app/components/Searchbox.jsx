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
    <form onSubmit={handleSubmit} className='flex max-w-3xl mx-auto justify-between items-center px-5'>
      <input className='h-14 w-full rounded-sm placeholder-gray-600 outline-none bg-transparent flex-1' type='text' placeholder='Search for movies' value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button type='submit' className='text-white disabled:text-gray-400'>Search</button>
    </form>

   
  )
}
