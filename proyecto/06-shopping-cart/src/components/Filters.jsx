import { useState } from 'react'
import './Filters.css'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
    const { filters, setFilters } = useFilters()
    const  [minPrice, setMinPrice] = useState(0)
    const minPriceFilterID = useId()
    const categoryFilterID = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }


    return (
        <section className="filters">

            <div>
                <label htmlFor={minPriceFilterID}>Precio a partir de:</label>
                <input 
                    type="range" 
                    id={minPriceFilterID}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterID}>Categoria</label>
                <select id={categoryFilterID} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portátiles</option>
                    <option value='smartphones'>Móviles</option>
                </select>
            </div>
        </section>
    )
}