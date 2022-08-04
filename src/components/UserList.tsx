import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user);
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return <h3>{error.toLowerCase()}</h3>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.id}. {user.name}</div>
            )}
        </div>
    );
};

export default UserList;
