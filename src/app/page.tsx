import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Welcome to Online Dawakhana !!!!!</p>
      </div>
      <Image
        src={
          'https://assets.toothsi.in/c_H_Jpdm_F0_ZS_9sci9pb_W_Fn_ZX_Mvd2_Vic2l0_ZS_8y_MD_Iy_LTA_4_L3_Jt_NTU_4_LW_Vs_ZW_1lbn_Rz_L_Xdvcm_Qt_MD_Ete_C5qc_Gc_b0cdf33d0c.webp'
        }
        alt='coming soon'
        height={400}
        width={400}
      ></Image>
      <div>By Dr Drashti Shah</div>
    </main>
  );
}
