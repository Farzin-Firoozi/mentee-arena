import FilterBTN from "../FilterBTN";
import { useDispatch } from "react-redux";
import { setGender } from '../../features/rickAndMorty/rickAndMortySlice';


export default function Gender() {

  const dispatch = useDispatch();

  let genders = ["female", "male", "genderless", "unknown"];

  return (
    <div className="accordion-item ">
      <button
        className="accordion-button collapsed" type="button"
        data-bs-toggle="collapse" data-bs-target="#collapseThree"
        aria-expanded="false" aria-controls="collapseThree"
      > 
        Gender
      </button>

      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((item, index) => (
            <FilterBTN
              key={index}
              name="gender"
              index={index}
              input={item}
              task={
                (input) => dispatch(setGender(input))
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}
