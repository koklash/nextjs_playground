interface SideNavbarProps {
    children: React.ReactNode;
  }
  
  const SideNavbar = ({ children }: SideNavbarProps) => {
    return (
        <>
            <div className="flex flex-col w-1/6 bg-tomato-orange">
                <div className="space-y-4">
                    <img src="/icons/8smile_logo-white-01-1-768x399.png" alt="Logo" className="pr-10" />
                    {children}
                </div>
            </div>
        </>
    );
  };
  
  export default SideNavbar;