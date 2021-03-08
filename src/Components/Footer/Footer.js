import { render } from '@testing-library/react';
import React from 'react';
import './Footer.css';

const Footer = () => (
    <div className="Footer">
        <p>&copy;{new Date().getFullYear()} Brunel University | All Rights Reserved
        </p>
    </div>
)
export default Footer;