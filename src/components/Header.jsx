

const Header = () => {
  return (
    <header className="bg-gray-900">
      <div className="container mx-auto">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 text-white">
              <span className="px-5 py-2">
                Home
              </span>
            </a>
            <a href="/shop" className="-m-1.5 p-1.5 text-white">
              <span className="px-5 py-2">
                Shop
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;