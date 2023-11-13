function HeaderComponent() {
  return (
    <header>
      <nav className="flex justify-between items-center">
        <a className="w-1/4 pl-5">
          <img
            src="https://cdn.mcdonalds.pl/public/build/images/header/friesMenu.bb2596583381aa0584fb120f7dbde079.svg"
            className="w-10"
          />
        </a>
        <div className="w-1/2 text-center">
          <a className="w-1">
            <img
              src="https://cdn.mcdonalds.pl/public/build/images/header/logo3.19d7d61fd29210afe458d0de4d0a7ca6.svg"
              className="inline-block w-14"
            />
          </a>
        </div>
        <div className="w-1/4 flex justify-end items-center">
          <a className="pr-5">
            <img
              src="https://cdn.mcdonalds.pl/public/build/images/icon/skuter.f6c2138dbdc54ac3d7a0775d8c574e43.svg"
              className="w-14"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;
