export function UserProfile({
  profile = { name: "Test", email: "dee@hotmail", avatar: "hello" },
}) {
  const { name, email, avatar } = profile;

  return (
    <div className="user-profile">
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p>Email: {email}</p>
    </div>
  );
}
