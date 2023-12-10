import NavbarItem from "./NavbarItem"

export default function Navbar() {
  return (
    <div className="flex justify-center gap-4 dark:bg-white dark:text-gray-600 bg-blue-400 lg:text-lg p-4 text-white ">
      <NavbarItem title="Trending" param="fetchTrending"/>
      <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
