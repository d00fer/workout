import { useState } from 'react'

const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
		e.preventDefault()

		const newWorkout = {
			title,
			load,
			reps,
		}
    	const res = await fetch('api/workouts', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newWorkout),
			})

		const json = await res.json()
		if(!res.ok){
			setError(json.error)
		}
		if(res.ok){
			setTitle('')
			setLoad('')
			setReps('')
			setError(null)
		}	
	}
	   
  return (
    <form className="create" onSubmit={handleSubmit}>
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
