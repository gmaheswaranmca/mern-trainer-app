import {useEffect,useState} from "react"

function ListTrainer(){

const [trainers,setTrainers] = useState([])

useEffect(()=>{

setTrainers([
    {name: 'Raj', skills: 'MERN'},
    {name: 'Rakesh', skills: 'MEAN'}
])

},[])

return(

<div>

<h3>Trainer List</h3>

<table className="table table-bordered">

<thead>

<tr>
<th>Name</th>
<th>Skills</th>
</tr>

</thead>

<tbody>

{trainers.map(t=>(
<tr key={t._id}>
<td>{t.name}</td>
<td>{t.skills}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}

export default ListTrainer