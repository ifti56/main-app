export default function UserCard({ user }) {
    return (
        <div className="user-card">
            <img src={user.avatar} className="avatar" />
            <h3>{user.name}</h3>
            <p className="role">{user.role}</p>
            <p className="role">new line added in main and deleted one</p>
            <p className="role">2nd line added</p>
            <p className="role">3rd line added</p>
        </div>
    );
}
