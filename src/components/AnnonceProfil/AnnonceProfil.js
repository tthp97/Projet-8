export default function AnnonceProfil({ name, picture }) {
  return (
    <div className="annonceProfil">
      <img
        className="profilPicture"
        src={picture}
        alt={`portrait de ${name}`}
      />
      <p className="nameProfil">{name}</p>
    </div>
  );
}
