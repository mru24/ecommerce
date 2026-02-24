

const Header = () => {
  return (
    <header className="bg-gray-900">
      <div className="">
        <nav aria-label="Global" className="flex max-w-7xl mx-10 items-center justify-between py-2">
          <div className="flex lg:flex-1">
            <a href="/" className="-ml-5 mr-5 my-1 text-white hover:bg-blue-950">
              <span className="inline-block px-5 py-3">
                Home
              </span>
            </a>
            <a href="/shop" className="-ml-5 mr-5 my-1 text-white hover:bg-blue-950">
              <span className="inline-block px-5 py-3">
                Shop
              </span>
            </a>
          </div>
          <div className="flex justify-self-end">
            <a href="/admin" className="-mr-5 ml-5 my-1 text-white hover:bg-blue-950">
              <span className="inline-block px-5 py-3">
                Admin
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;