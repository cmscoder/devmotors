import { HomeProps } from '@/utils/home.type';
import styles from './styles.module.scss';
import Image from 'next/image';

export function Services({ object }: HomeProps) {
  return (
    <>
      <section className={styles.aboutContainer} id="services">
        <article className={styles.innerAbout}>
          <h1 className={styles.title}>About</h1>
          <p>{object.metadata.about.description}</p>
        </article>
        <div className={styles.aboutBanner}>
          <Image
            className={styles.aboutImage}
            alt="Company image"
            quality={100}
            fill={true}
            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
            src={object.metadata.about.banner.url}
          />
        </div>
      </section>
      <h2 className={styles.servicesTitle}>See our services</h2>
      <section className={styles.services}>
        {object.metadata.services.map(service => (
          <article key={service.description} className={styles.service}>
            <div className={styles.innerService}>
              <Image
                className={styles.imageService}
                alt="Service image"
                quality={100}
                fill={true}
                sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
                src={service.image.url}
              />
            </div>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
