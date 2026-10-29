import { useState, useEffect } from 'react';

export function useUsers() {
	const [users, setUsers] = useState<{ name: string; age?: number; isAdmin?: boolean }[]>([]);

	useEffect(() => {
		fetch('http://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => {
				const apiUsers = data.map((item: {name: string}) => ({ name: item.name }));
				setUsers(apiUsers);
			});
	}, []);

	return { users, setUsers };
}