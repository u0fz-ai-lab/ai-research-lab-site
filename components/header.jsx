'use client'
import Link from "next/link"


const Header = () => {
    return <header className="bg-white shadow">
    <div className="px-4 py-6 md:px-6 lg:px-8 lg:py-8">
      <div className="flex items-center space-x-4">
        <Link className="flex space-x-2 font-bold" href="/">
          {/* <HomeIcon className="w-6 h-6" /> */}
          <span>Home</span>
        </Link>
        <nav className="ml-auto space-x-4 flex">
          <Link
            className="text-sm font-medium tracking-wide border-b-2 border-transparent dark:text-gray-400 dark:group-hover:text-gray-300 dark:active:text-gray-300 dark:visited:text-gray-300 dark:hover:text-gray-200"
            href="/articles"
          >
            Articles
          </Link>
          <Link
            className="text-sm font-medium tracking-wide border-b-2 border-indigo-500 dark:text-gray-400 dark:group-hover:text-gray-300 dark:active:text-gray-300 dark:visited:text-gray-300 dark:hover:text-gray-200"
            href="/"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium tracking-wide border-b-2 border-transparent dark:text-gray-400 dark:group-hover:text-gray-300 dark:active:text-gray-300 dark:visited:text-gray-300 dark:hover:text-gray-200"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  </header>
}

export default Header