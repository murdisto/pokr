import React from 'react';
import { useForm } from 'react-hook-form';


const SelectGame = ({ label, name, onChange, onBlur, register, required }) => (
  <>
    <label htmlFor={label} aria-label={label}>{label} </label>
    <select defaultValue="" name={name} onChange={onChange} onBlur={onBlur} {...register(name, { required })}>
      <option value="" disabled>Select Game</option>
      <option value="NLHE">NLHE</option>
      <option value="PLO">PLO</option>
      <option value="LHE">LHE</option>
    </select>
  </>
);

const SelectStakes = ({ label, name, onChange, onBlur, register, required }) => (
  <>
    <label htmlFor={label} aria-label={label}>{label} </label>
    <select defaultValue="" name={name} onChange={onChange} onBlur={onBlur} {...register(name, { required })}>
      <option value="" disabled>Select Stakes</option>
      <option value="1-2">1-2</option>
      <option value="2-5">2-5</option>
      <option value="5-10">5-10</option>
    </select>
  </>
);

const Input = ({ label, dataLabel, register, required, type }) => (
  <>
    <label htmlFor={label} aria-label={label}>{label} </label>
    <input type={type} {...register(dataLabel, { required })} />
  </>
);

const InputTime = ({ label, dataLabel, register, required, type }) => (
  <>
    <label htmlFor={label} aria-label={label}>{label} </label>
    <input type={type} {...register(dataLabel, { min: 0, max: 23 })} min="0" max="23" />
    <label htmlFor="minutes" aria-label="minutes">Minutes </label>
    <input type={type} {...register("minutes", {min: 0, max: 59})} min="0" max="59" />
  </>
);


export const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input label="Location" dataLabel="location" type="text" register={register} required />
      </div>
      <div>
        <Input label="Date" dataLabel="date" type="date" register={register} required />
      </div>
      <div>
        <SelectGame label="Game" name="game" register={register} required />
      </div>
      <div>
        <SelectStakes label="Stakes" name="stakes" register={register} required />
      </div>
      <div>
        <Input label="Cash In" dataLabel="cashIn" type="number" register={register} required />
      </div>
      <div>
        <Input label="Cash Out" dataLabel="cashOut" type="number" register={register} required />
      </div>
      <div>
        <InputTime label="Hours Played" dataLabel="hours" type="number" register={register} required />
      </div>
      <div>
        <input type="reset" /><input type="submit" />
      </div>
    </form>
  )
}
