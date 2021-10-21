import styles from "./global.css";

export function Layout({ header, chatList, children }) {
   return (
      <div className={styles.body}>
         <div className={styles.header}>{header}</div>

         <div className={styles.content}>
            <div className={styles.chats}>{chatList}</div>
            <div className={styles.messages}>{messages}</div>
         </div>
      </div>
   );
}