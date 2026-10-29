import { useState } from 'react';
import { Greeting } from '../Greeting';
import { useUsers } from '../useUsers';
import styles from '../App.module.css';
export function Home() {
    const [likes, setLikes] = useState(0);
    const [newName, setNewName] = useState('');
    const { users, setUsers } = useUsers();

    const handleAddUser = () => {
        if (newName.trim() === '') return;
        setUsers([...users, { name: newName }]);
        setNewName('');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Моё первое React-приложение</h1>

            <div className={styles.controls}>
                <button
                    onClick={() => setLikes(likes + 1)}
                    className={styles.button}
                >
                    ❤️  Поставить лайк ({likes})
                </button>

                <div className={styles.form}>
                    <input
                        type="text"
                        placeholder="Введите имя..."
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className={styles.input}
                    />
                    <button
                        onClick={handleAddUser}
                        className={styles.button}
                    >
                        Добавить
                    </button>
                </div>
            </div>

            {users.map((user, index) => (
                <Greeting
                    key={index}
                    name={user.name}
                    age={user.age}
                    isAdmin={user.isAdmin}
                    avatarUrl={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
                />
            ))}
        </div>
    )
}