import React from 'react'

import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';

export default function Sheader() {
    return (
        <section className='bg-blue-950 h-10 overflow-hidden'>
            <div className='main-container h-full w-full flex items-center'>
                <div className='w-full flex items-center justify-start gap-6'>
                    <Link href={""}>
                        <span className='center gap-2'>
                            <CallIcon className='!text-white' />
                            <p className='!text-white'>+91 8260500785</p>
                        </span>
                    </Link>
                    <Link href={""}>
                        <span className='center gap-2'>
                            <MailOutlineIcon className='!text-white' />
                            <p className='!text-white'>info@mrcorporate.in</p>
                        </span>
                    </Link>
                    <Link href={""}>
                        <span className='center gap-2'>
                            <LocationOnIcon className='!text-white' />
                            <p className='!text-white'>Bhubaneswar</p>
                        </span>
                    </Link>
                </div>

                <div className='w-full h-full flex justify-end gap-6 items-center'>
                    <FacebookSharpIcon className='!text-white' />
                    <WhatsAppIcon className='!text-white' />
                    <YouTubeIcon className='!text-white' />
                    <TwitterIcon className='!text-white' />
                </div>
            </div>
        </section>
    );
}
