import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Logo, Logout } from '../index.js';

function Header() {
  const authstatus = useSelector((state) => state.auth.status); // access auth status from Redux
  const navigate = useNavigate(); // programmatic navigation

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true, // always visible
    },
    {
      name: "Login",
      slug: "/login",
      active: !authstatus, // only show if NOT logged in
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authstatus, // only show if NOT logged in
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authstatus, // only show if logged in
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authstatus, // only show if logged in
    },
  ];

  return (
    <header className='w-full bg-gray-800 py-4 mb-8'>
      <Container>
        <nav className='flex items-center'>
          {/* Logo */}
          <div className='mr-4'>
            <Link to="/">
              <Logo width="120px" />
            </Link>
          </div>

          {/* Navigation Buttons */}
          <ul className='flex ml-auto items-center space-x-2'>
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='inline-block text-white font-bold px-6 py-4 hover:bg-white hover:text-blue-800 rounded-xl'
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}

            {/* Logout Button */}
            {authstatus && (
              <li>
                <Logout />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
