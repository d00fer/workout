import { useState } from 'react'

const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')

  return (
    <form className="create">
      <h3>Add new workout</h3>

      <label htmlFor="title">Exercise Title</label>
      <input
        placeholder="Title"
        id="title"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        vaulue={title}
      />

      <label htmlFor="load">Exercise Load</label>
      <input
        placeholder="in KG"
        id="load"
        type="number"
        onChange={(e) => {
          setLoad(e.target.value)
        }}
        value={load}
      />

      <label htmlFor="reps">Exercies Reps</label>
      <input
        placeholder="Reps"
        id="reps"
        type="number"
        onChange={(e) => {
          setReps(e.target.value)
        }}
        value={reps}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default WorkoutForm
