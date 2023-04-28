import styles from "@/styles/components/DisplayRPM.module.scss"

type DisplayProps = {
    rpm?: string
}

export function DisplayRPM({rpm}: DisplayProps){
    return (
        <div className={styles.container}>
            <span>RPM</span>
            <span>{rpm}</span>
        </div>
    )
}