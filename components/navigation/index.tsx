import cn from 'classnames';
import styles from './styles.module.scss'
import { centerMenu, leftMenu } from './data';
import Menu from './component/Menu';
import CurrencyMenu from './component/CurrencyMenu';
import LanguageMenu from './component/LanguageMenu';

const Navigation = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={cn('container', styles.nav_Inner_Wrapper)}>
          <section className={styles.left_Nav}>
            <Menu level={0} menuItem={leftMenu} />
          </section>
          <section className={styles.center_Nav}>
            <Menu level={0} menuItem={centerMenu} />
          </section>
          <section className={styles.right_Nav}>
            <div>
              Sell on Martfury
            </div>
            <div>
              Track Your order
            </div>
            <div>
              <CurrencyMenu />
            </div>
            <div>
              <LanguageMenu />
            </div>
          </section>
        </div>
      </nav>
    </>
  )
}

export default Navigation






