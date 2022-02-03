import { Link } from 'remix'
import Icon from './Icon'

export default function Header() {
  return (
    <div className='relative top-0 left-0 w-screen h-16 m-0 flex flex-row bg-primary text-white shadow items-center justify-between'>
      <div className='w-14 m-1'>
        <Link to='/'>
          <Icon />
        </Link>
      </div>
      <Link
        to='/posts/new'
        className='bg-secondary hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full duration-200'
      >
        New Post
      </Link>
      <Link
        to='/login'
        className='bg-secondary hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full duration-200'
      >
        Login
      </Link>
    </div>
  )
}
