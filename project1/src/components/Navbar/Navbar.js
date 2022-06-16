import styles from './Navbar.modules.css';

const Navbar = () => {
    return (
        <div className={[styles.navbar, styles.text]}>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.nav__links}>
                        <li>Expenses</li>
                        <li>Add New Expense</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar;