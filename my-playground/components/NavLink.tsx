import Link from 'next/link'
import { useRouter } from 'next/router'

type NavLink = {
    icon: string
    href: string
    label: string
}

type NavProps = {
  navLinks: NavLink[]
}

const Nav = ({ navLinks }: NavProps) => {
  const { pathname } = useRouter()

  return (
    <>
      <ul>
        {navLinks.map((link) => (
          <li key={link.href}>
            {pathname === link.href ? (
             <Link href={link.href} passHref={true} legacyBehavior={true}>
                <p className="flex items-center text-xs font-bold text-white">
                <img src={link.icon} alt={link.label} className="w-1.5 mx-3 my-3" />
                {link.label}
                </p>
            </Link>
            ) : (
            <Link className='space-x-4' href={link.href} passHref={true} legacyBehavior={true}>
                <a className="flex items-center text-xs text-white transition duration-300 hover:font-bold hover:scale-105">
                <img src={link.icon} alt={link.label} className="w-1.5 mx-3 my-3" />
                {link.label}
                </a>
            </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}


export default Nav
