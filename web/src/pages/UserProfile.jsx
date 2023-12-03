export function UserProfile({
  profile = {
    name: "Christian Gaayuoni",
    email: "gayuoni@proton.me",
    avatar: "/src/images/christian.jpeg",
  },
}) {
  const { name, email, avatar } = profile;

  return (
    <div className="user-profile">
      <img
        src={avatar}
        alt={name}
        width={70}
        height={70}
        style={{ borderRadius: "50%" }}
      />
      <h4>{name}</h4>
      <p>Email: {email}</p>
    </div>
  );
}
