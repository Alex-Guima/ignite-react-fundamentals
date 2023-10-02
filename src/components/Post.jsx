import styles from './Post.module.css'

export function Post() {
    return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/Duds29.png"/>

                <div className={styles.authorInfo}>
                    <strong>Eduarda Elisa</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time dateTime='2023-09-26 10:32:31'>Publicado há 1h</time>
        </header>

        <div className={styles.content}>
            <p>Fala galeraa</p>
            <p>Acabei de subir mais um projeto no meu portifa.</p>
            <p><a href="">duds.design/doctorcare</a></p>
            <p><a href="">#novoprojeto #rocketseat</a></p>
        </div>
    </article>
    )
}