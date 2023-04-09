import { PrimaryButton, SecondaryButton } from '../components/uiElements/Buttons';
import SideNavbar from '../components/SideNavbar';
import NavLink from '../components/NavLink';
import Box from '../components/Box';


const navLinks1 = [
  { icon:'/icons/white-circle-emoji.png',href: '/', label: 'Startseite' },
  { icon:'/icons/white-circle-emoji.png',href: '/dashboard', label: 'Dashboard' },
  { icon:'/icons/white-circle-emoji.png',href: '/cloudflare/video', label: 'Tutorials' },
  { icon:'/icons/white-circle-emoji.png',href: '/user-management/create-user', label: 'User anlegen' },
]

const navLinks2 = [
  { icon:'/icons/white-circle-emoji.png',href: '/', label: 'Beispiel 2' },
  { icon:'/icons/white-circle-emoji.png',href: '/cloudflare/video', label: 'Beispiel 1' },
  
]

function App() {

  return (
    <>
      <div className="flex flex-row h-screen">
        <SideNavbar>
          <NavLink navLinks={navLinks1} />
          <NavLink navLinks={navLinks2} />
        </SideNavbar>
        <div className="flex flex-col flex-1 p-3 bg-lavenderblush">
          <div className="flex flex-row items-center justify-between pb-5">
            <h1 className="text-lg font-bold">Dashboard</h1>
            <div className="flex flex-row space-x-2 ">
              <SecondaryButton> Button </SecondaryButton>
              <SecondaryButton> Button </SecondaryButton>
              <PrimaryButton> Button </PrimaryButton>
            </div>
          </div>

          <div className="grid h-screen grid-cols-3 gap-3">
            <Box className='row-span-2'>test1</Box>
            <Box>test 2</Box>
            <Box className='row-span-3 bg-tibetan-plateau'>test3</Box>
            <Box className='!bg-white border-black border-2'>8SMILE HILFT!</Box>
            <Box className='col-span-2'>test5</Box>
          </div>
        </div>
      </div>
    </>
    

  );
}

export default App