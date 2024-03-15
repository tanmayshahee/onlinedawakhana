// components/WhatsAppIcon.js
'use client';
import React from 'react';
import styles from './WhatsAppIcon.module.scss';
import Image from 'next/image';

const WhatsAppIcon = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi'); // Custom message
    window.open(`https://wa.me/9428427081?text=${message}`, '_blank');
  };

  return (
    <div className={styles.whatsappIcon} onClick={openWhatsApp}>
      <Image
        src='https://asset2.toothsi.in/whatsapp_new_8b27e79241.svg'
        width={50}
        height={50}
        alt='WhatsApp'
      />
    </div>
  );
};

export default WhatsAppIcon;
