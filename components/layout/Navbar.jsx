'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import Button from '../Button'
import Logo from '@/public/logo.png'
import Drawer from './Drawer'

const AnimatedLink = ({ href, children, ...props }) => {
  return (
    <Link href={'/' + href}>
      <motion.span
        className={`px-3 py-1 text-gray-600 ${
          props.path?.split('/')[1] === href && 'border-b border-primary'
        }`}
        whileHover={{ color: 'var(--primary)' }}
        transition={{ type: 'tween', stiffness: 300 }}
      >
        {children}
      </motion.span>
    </Link>
  )
}

const Navbar = () => {
  const path = usePathname()

  return (
    <nav className='w-full bg-white shadow-md sticky top-0 z-50'>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className='w-full max-w-7xl mx-auto px-7 py-1 md:px-12 xl:py-3 flex items-center justify-between'
      >
        <Link href='/' className='flex-1'>
          <Image
            src={Logo}
            alt='E Inventions'
            width='auto'
            className='h-12 md:h-14 xl:h-20 w-fit'
            loading='lazy'
          />
        </Link>
        <div className='gap-4 xl:gap-10 items-center hidden lg:flex'>
          <AnimatedLink href='' path={path}>
            Home
          </AnimatedLink>
          <AnimatedLink href='about' path={path}>
            About
          </AnimatedLink>
          <AnimatedLink href='services' path={path}>
            Services
          </AnimatedLink>
          <Link href='/contact'>
            <Button variant='primary' size='md'>
              Contact Us
            </Button>
          </Link>
        </div>

        <Drawer />
      </motion.div>
    </nav>
  )
}

export default Navbar
