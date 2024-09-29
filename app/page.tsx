import { Hero,SearchBar,CustomFilter, CarCard } from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home() {

  const allCars = await fetchCars();
  console.log("cccc",allCars);
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

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
         {
          !isDataEmpty ?
          (
          <section>
             <div className='home__error-container'>
               {
                allCars?.map((car) => (
                  <CarCard car={car} />
                ))
               }
             </div>
          </section>
          )
          :
          (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Oops, No Results.....</h2>
              <p>{allCars?.message}</p>
            </div>
          )
         }
       </div>
    </main>
  )
}
