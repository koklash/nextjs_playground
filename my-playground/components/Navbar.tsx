const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-4 py-2 bg-teal-200'>
      <div className='flex items-center'>
        <img src='/icons/cropped-website-icon2-180x180.png' alt='Logo' className='h-8' />
        <h1 className='ml-2 text-xl font-bold text-white'>My App</h1>
      </div>
      <div className='flex'>
        <a href='/' className='px-4 py-2 font-bold text-white rounded hover:bg-gray-700'>Home</a>
        <a href='#' className='px-4 py-2 font-bold text-white rounded hover:bg-gray-700'>About</a>
        <a href='#' className='px-4 py-2 font-bold text-white rounded hover:bg-gray-700'>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
