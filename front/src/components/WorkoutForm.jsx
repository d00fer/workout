import { useState } from 'react'

const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')

  return (
    <form className="create">
      <h3>Add New Workout</h3>
      <lable>Exercize title:</lable>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
    </form>
  )
}

export default WorkoutForm
