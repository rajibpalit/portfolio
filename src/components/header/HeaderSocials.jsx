import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com/in/rajibpalit' target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href='https://github.com/rajibpalit' target="_blank" rel='noreferrer'><FaGithub /></a>
        <a href='https://dribble.com' target="_blank" rel='noreferrer'><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials