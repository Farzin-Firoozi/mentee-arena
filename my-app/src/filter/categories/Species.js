import FilterBTN from "../FilterBTN";
import { useDispatch } from "react-redux";
import { setSpecies } from '../../features/rickAndMorty/rickAndMortySlice';

export default function Species() {

  const dispatch = useDispatch();

  let species = [
    "Human", "Alien", "Humanoid",
    "Poopybutthole", "Mythological", "Unknown",
    "Animal", "Disease","Robot","Cronenberg","Planet",
  ];

  return (
    <div className="accordion-item ">
      <button
        className="accordion-button collapsed" type="button"
        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
        aria-expanded="false" aria-controls="collapseTwo"
      > 
        Species 
      </button>

      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((item, index) => (
            <FilterBTN
              key={index}
              name="species"
              index={index}
              input={item}
              task={
                (input) => dispatch(setSpecies(input))
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}
