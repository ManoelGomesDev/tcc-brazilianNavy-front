
import styles from '@/styles/components/NavBar.module.scss'

export function NavBar() {
    return (
        <>
            <div className={styles.header}>
                <img src="/images/logoImage.png" alt="navy logo" />
                <h1>PRAÇA DE MÁQUINAS INTEGRADA</h1>
                <div className={styles.profile}>
                    <span>Nome do Militar</span>
                    <img src="/images/profile.png" alt="profile" className={styles.profileImage} />
                </div>


            </div>
            <div className={styles.menu}>
                <ul>
                    <li>MCP1</li>
                    <li>MCP2</li>
                    <li>MCA1</li>
                    <li>MCA2</li>

                </ul>
            </div>
        </>


    )
}