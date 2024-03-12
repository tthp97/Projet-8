function DescriptionCollapse({ id, description, equipements }) {
  if (description) {
    return (
      <>
        <p className="collapseDescription ">{description}</p>
      </>
    );
  } else if (equipements) {
    return (
      <>
        <div className="collapseDescription">
          {equipements.map((equipement) => (
            <p key={`${equipement}+${id}`}>{equipement}</p>
          ))}
        </div>
      </>
    );
  }
}
export default DescriptionCollapse;
