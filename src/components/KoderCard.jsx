import KoderCardImage from "./KoderCardImage";

export default function KoderCard(props) {
  const name = `${props.firstName} ${props.lastName}`;
  const image = `https://api.dicebear.com/6.x/initials/png?seed=${name}`;
  const isPremium = name.toLowerCase().startsWith("p");

  return (
    <article className={props.isActive ? "koder_active" : "koder"}>
      <KoderCardImage src={image} />
      <p>
        {isPremium && "👑"} {name}
      </p>

      {/* {props.isActive && <p> Online </p>}
      {!props.isActive && <p> Offline </p>} */}

      {props.isActive ? <p> Online </p> : <p> Offline </p>}
      {props.skills.map((skill, index) => {
        return <p key={`skill-${index}`}>{skill}</p>;
      })}
    </article>
  );
}
