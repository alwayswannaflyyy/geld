
import Link from 'next/link';
import React, { useState } from 'react';
import { useAuth } from '../provider/AuthProvider';

function Profile() {
    const {signOut} = useAuth()
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    // const viewProfile = () => {
       
    //     console.log('View Profile'); 
    //     setShowDropdown(false);
    // };
    const handleLogout = () => {
        console.log('Sign Out'); 
        setShowDropdown(false);
    };
    return (
        <div className='relative'>
            <img
                className='rounded-full cursor-pointer w-10 h-10'
                src="https://www.setup.gg/wp-content/uploads/2022/12/Twistzz-Featured-Image.png"
                alt="Profile"
                onClick={toggleDropdown}
            />
            {showDropdown && (
                <div className='absolute bg-white w-36 rounded-md z-20 p-2 border-2 right-0'>
                    <Link href="/profilee">
                        <button className='' >View Profile</button>
                    </Link>
                        <button onClick={signOut}>Sign Out</button>
                </div>
            )}
        </div>
    );
}
export default Profile;