import React from 'react';
import './footer.css';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

const Footer = () => {
    return (
       <footer>
        <div className='shop-footer'>
       <p class="footertext">Start your day with <b>Online Book Store</b></p>
       <p>Subscribe to see what we're thinking</p>
       <form>
       <MarkEmailUnreadIcon color="primary"/><input type="email" name="email" id="email" placeholder="Your email address"></input>
        <button type="submit" id="subscribe">Subscribe</button>
        </form>
       </div>
       
        <ul className="footer_list">
            <li>Home</li>
            <li>Features</li>
            <li>Style Guide</li>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>Demos</li>
            <li>Get Theme</li>
        </ul>
  
    </footer>

        

    )
}

export default Footer;