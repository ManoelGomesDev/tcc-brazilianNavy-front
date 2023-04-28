import styles from "@/styles/components/DisplayGeneral.module.scss"

type DisplayGeneralProps = {
    message?: string
}


export function DisplayGeneral({message}: DisplayGeneralProps) {
    return (
        <div className={styles.container}>
            <span>{message?.toUpperCase()}</span>
        </div>
    )
}