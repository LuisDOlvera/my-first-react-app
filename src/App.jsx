import KoderCard from "./components/KoderCard";
import { koders } from "./data/koders";

export default function App() {
  return (
    <>
      <p>lista de Koders</p>

      <section className="kodersList">
        {koders.map((koder, index) => {
          return (
            <KoderCard
              key={`koder-card-${index}`}
              firstName={koder.firstName}
              lastName={koder.lastName}
              isActive={koder.isActive}
              skills={koder.skills}
            />
          );
        })}
      </section>
    </>
  );
}
