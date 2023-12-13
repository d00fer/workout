import { useState } from 'react'

const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')

  return (
    <form className="create">
      <h3>Add new workout</h3>

      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        vaulue={title}
      />

      <label>Exercise load in (KG):</label>
      <input
        type="number"
        onChange={(e) => {
          setLoad(e.target.value)
        }}
        value={load}
      />

      <label>Exercies reps:</label>
      <input
        type="number"
        onChange={(e) => {
          setReps(e.target.value)
        }}
        value={reps}
      />

      <button>Submit</button>
    </form>
  )
}

export default WorkoutForm
