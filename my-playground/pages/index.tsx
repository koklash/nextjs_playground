import Link from 'next/link'


export default function App() {

  return (
    <div>
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <h1 className="text-3xl font-bold ">
          Hello world!
        </h1>
        <ul>
          <li>
            <Link className='underline' href='/user-management/create-user'>
              create user
            </Link>
          </li>
          <li>
            <Link className='underline' href='/cloudflare/video'>
                video
            </Link>
          </li>
          <li>
            <Link className='underline' href='/dashboard'>
                dashboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}