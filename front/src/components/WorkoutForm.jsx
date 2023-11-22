import { useState } from 'react'

const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')

  return (
    <form className="create">
      <h3>Add New Workout</h3>

      <lable>Exercise title:</lable>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <lable>Load in (kg):</lable>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <lable>Reps:</lable>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button>Add workout </button>
    </form>
  )
}

export default WorkoutForm
