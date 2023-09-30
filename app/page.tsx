import Offer from './component/offer'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.top_Offers}>
        <Offer />
      </section>
    </main>
  )
}
