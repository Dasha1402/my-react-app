import styles from './Greeting.module.css';

interface GreetingProps {
    name: string;
    age?: number;
    isAdmin?: boolean;
    avatarUrl?: string;
}

export function Greeting({ name, age, isAdmin, avatarUrl }: GreetingProps) {
    return (
        <div className={styles.card}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                {avatarUrl && (
                    <img
                        src={avatarUrl}
                        alt={name}
                        style={{ width: '60px', borderRadius: '50%', backgroundColor: '#e0e0e0' }}
                    />
                )}
                <div>
                    <h2 className={styles.name}>Привет, {name}!</h2>
                    {age ? <p className={styles.age}>Тебе{age} лет.</p> : <p className={styles.age}>Возраст скрыт.</p>}
                    {isAdmin && <span className={styles.adminBadge}>[АДМИН]</span>}
                </div>

            </div>
        </div>
    );
}