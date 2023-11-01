type UserListProps = {
    users: {
        name: string;
        email: string;
    }[]
}

const UserList = ({ users }: UserListProps) => {
    const renderedUsers = users.map((user, index) => {
        return (
        <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>
        )
    })

    return ( 
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {renderedUsers}
            </tbody>
        </table>
     )}
 
export default UserList;