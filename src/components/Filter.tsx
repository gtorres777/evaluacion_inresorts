import { useState } from 'react';
import { categories } from '../assets/categories/categoriesdata'

export default function Filter(props: any) {

    const [Checked, setChecked] = useState<number[]>([])

    const handleToggle = (value:number) => {

        const currentIndex = Checked.indexOf(value)
        const newChecked = [...Checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)

    }

    const renderCheckboxCategories = () => categories.map( (categoria, index) => (
        <div className="form-check" style={{ margin:"10px" }} key={index.toString()}  >
            <input
                className="form-check-input"
                type="checkbox" value=""
                id={index.toString()}
                onChange={() => handleToggle(categoria.id)}
            />
            <label className="form-check-label" htmlFor={index.toString()} >
              {categoria.name}
            </label>
         </div>

    ))


  return (
      <div className="container mt-10">
        <p>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Filtrar usuarios
        </button>
        </p>
        <div className="collapse" id="collapseExample">
        <div className="card card-body" style={{display:"flex", flexDirection:"row", flexWrap:"wrap", marginBottom:"10px"}}>
          {renderCheckboxCategories()}
        </div>
        </div>
      </div>
  );
}
