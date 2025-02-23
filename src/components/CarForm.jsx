import { useDispatch, useSelector } from 'react-redux';
import { addCar, changeCost, changeName } from '../store';

function CarForm() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.form.name);
  const cost = useSelector((state) => state.form.cost);

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const cost = parseInt(event.target.value) || 0;
    dispatch(changeCost(cost));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
    // dispatch(resetForm());
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              type="string"
              value={name}
              onChange={handleNameChange}
              className="input is-expanded"
            ></input>
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              type="number"
              value={cost || ''}
              onChange={handleCostChange}
              className="input is-expanded"
            ></input>
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-link">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
