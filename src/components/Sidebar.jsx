import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            <img
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1693917566028-c0f204817a97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src='https://github.com/Alex-Guima.png'/>
                <strong>Alexandre Guimarães</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}