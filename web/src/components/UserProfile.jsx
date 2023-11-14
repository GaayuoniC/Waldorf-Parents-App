export function UserProfile({
  profile = {
    name: "Rob Green",
    email: "dee@hotmail",
    avatar: "/src/images/userprofile.jpg",
  },
}) {
  const { name, email, avatar } = profile;

  return (
    <div className="user-profile">
      <img src={avatar} alt={name} width={70} height={70} />
      <h4>{name}</h4>
      <p>Email: {email}</p>
    </div>
  );
}
