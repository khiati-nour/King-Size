import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='Signup'>
      <button className='btn1'>Sign Up</button>
    </Link>
  );
}