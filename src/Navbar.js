import React from 'react'
import { links } from './data'
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css'
// import './Nav.css'

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 120,
    })
  }

  // const toggleMenu=(e)=>{
  //     e.target.classList.toggle('mobile-nav-links')
      
  // }
  return (
    <nav className='top__bar'>
      <div className='nav-center'>
         <div className="name">
                    Cymark
         </div>
         <div className="menu">

                    <div className="burger">
                        <Link  to="/https://web.facebook.com/uchenna.osinachi.9">
                                <MenuIcon/>
                        </Link> 
                    </div>
                    <div className="nav__links">
                    {links.map((link) => {
                        return (
                        <a href={link.url} key={link.id} onClick={handleClick}>
                            {link.text}
                        </a>
                        )
                    })}
                    </div>
                
        </div>


      </div>
    </nav>
  )
}

export default Navbar
