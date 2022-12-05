import Link from 'next/link'

export default function App() {

  return (
    <div>
      <head>
        <title>8smile</title>
        <meta name='description' content='index page'/>
      </head>
      <body>
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <h1 className="text-3xl font-bold ">
          Hello world!
        </h1>
        <ul>
          <li>
            <Link className='underline' href='/user-management/create-user'>
              create User
            </Link>
          </li>
          
        </ul>
      </div>
      </body> 
    </div>
  );
}