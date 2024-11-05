import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
    const { currentUser } = useSelector(state => state.user);
    const defaultAvatar = "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png";

    return (
        <header className='bg-slate-200 shadow-sm'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
                <Link to='/'> 
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-slate-500'>Sahand</span>
                        <span className='text-slate-700'>Estate</span>
                    </h1>
                </Link>

                <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                    <input type="text" placeholder='Search...' 
                        className='bg-transparent focus:outline-none w-24 sm:w-64' />
                    <FaSearch className='text-slate-600' />
                </form>
                
                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
                    </Link>

                    <Link to='/about'>
                        <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
                    </Link>

                    <Link to='/profile'>
                        {currentUser ? (
                            <img 
                                className='rounded-full h-7 w-7 object-cover' 
                                src={currentUser.avatar || defaultAvatar} 
                                alt='profile'
                            />
                        ) : (
                            <li className='text-slate-700 hover:underline'>Sign in</li>
                        )}
                    </Link>
                </ul>
            </div>
        </header>
    );
}
