import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { removeCar } from '../store';

const memoizedCars = createSelector(
  [(state) => state.cars.data, (state) => state.cars.searchTerm],
  (data, searchTerm) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);

function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector(memoizedCars);
  const name = useSelector((state) => state.form.name);

  const handleCarDelete = (id) => {
    dispatch(removeCar(id));
  };

  const renderedCars = cars.map((car) => {
    const isBold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${isBold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => {
            handleCarDelete(car.id);
          }}
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
