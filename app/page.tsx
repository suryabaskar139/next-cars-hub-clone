import { Hero,SearchBar,CustomFilter } from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {

  const carsDats = await fetchCars();
  console.log("cccc",carsDats);
  

  return (
    <main className="overflow-hidden">
       <Hero />
       <div className='mt-12 padding-x padding-y max-width'>

        <div className='home__text-container'>
           <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
           <p>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter />
            <CustomFilter  />
          </div>
        </div>
         
       </div>
    </main>
  )
}
