export function UserProfile({
  profile = {
    name: "Rob Green",
    email: "dee@hotmail",
    avatar: "https://pokeapi.co/api/v2/pokemon/1",
  },
}) {
  const { name, email, avatar } = profile;

  return (
    <div className="user-profile">
      <img src={avatar} alt={name} width={50} height={20} />
      <h4>{name}</h4>
      <p>Email: {email}</p>
    </div>
  );
}
