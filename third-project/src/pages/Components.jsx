const Blobs1 = () => {
  return ( 
              <div className="animate-bounce w-20 h-20 rounded-full bg-violet-700 blur-3xl"></div>


   );
}
 


const Blobs2 = () => {
  return ( 
              <div className="w-20 h-40 rounded-full bg-orange-700 blur-3xl"></div>


   );
}
const Blobs3 = () => {
  return ( 
              <div className="w-20 h-40 rounded-full bg-orange-700 blur-3xl"></div>


   );

   
}

const ServiceCard = ({name, description, category}) => {
  return (
     <div className='w-80 rounded-lg h-96  md:flex border-2 border-slate-400 hover:border-2 hover:border-violet-400 hover:shadow-2xl hover:ease-in-out  mt-10'>
          <div className="bg-slate-100 w-full h-28 rounded-t-md flex shadow-md ">
                <div className="w-96 p-2">
                  <h1 className="font-bold">{name}</h1>
                  <p className="text-sm  text-slate-500">{description}</p>
                </div>
                <div className="p-5"><button className="w-16 hover:bg-orange-50 hover:text-orange-400 bg-violet-200  rounded-full text-violet-700">{category}</button></div>
          </div>
            
                    
  </div> );
}
const ServiceCard2 = ({name, description, category}) => {
  return (
     <div className='w-80 rounded-lg h-96  md:flex border-2 border-slate-400 hover:border-2 hover:border-violet-400 hover:shadow-2xl hover:ease-in-out  mt-10'>
          <div className="bg-slate-100 w-full h-28 rounded-t-md flex shadow-md ">
                <div className="w-96 p-2">
                  <h1 className="font-bold">{name}</h1>
                  <p className="text-sm text-slate-500">{description}</p>
                </div>
                <div className="p-5"><button className="w-24 hover:bg-orange-50 hover:text-orange-400 bg-blue-200  rounded-full text-blue-700">{category}</button></div>
          </div>
            
                    
  </div> );
}
const ServiceCard3 = ({name, description, category }) => {
  return (
     <div className='w-80 rounded-lg h-96  md:flex border-2 border-slate-400 hover:border-2 hover:border-violet-400 hover:shadow-2xl hover:ease-in-out  mt-10'>
          <div className="bg-slate-100 w-full h-28 rounded-t-md flex shadow-md ">
                <div className="w-96 p-2">
                  <h1 className="font-bold">{name}</h1>
                  <p className="text-sm text-slate-500">{description}</p>
                </div>
                <div className="p-5"><button className="w-20 hover:bg-orange-50 hover:text-orange-400 bg-green-200  rounded-full text-green-700">{category}</button></div>
          </div>
            
                    
  </div> );
}
const ServiceCard4 = ({name, description, category}) => {
  return (
     <div className='w-80 rounded-lg h-96  md:flex border-2 border-slate-400 hover:border-2 hover:border-violet-400 hover:shadow-2xl hover:ease-in-out  mt-10'>
          <div className="bg-slate-100 w-full h-28 rounded-t-md flex shadow-md ">
                <div className="w-96 p-2">
                  <h1 className="font-bold">{name}</h1>
                  <p className="text-sm text-slate-500">{description}</p>
                </div>
                <div className="p-5"><button className="w-20 hover:bg-orange-50 hover:text-orange-400 bg-green-200  rounded-full text-green-700">{category}</button></div>
          </div>
            
                    
  </div> );
}

const Prices = ({Package, Plan, Currency, Duration, Amount}) =>{

  return(

    <div className="p-5">
      
        <div className="shadow-sm w-80 p-5 rounded-lg h-96 border border-slate-300 hover:border-2 hover:border-violet-700 hover:shadow-lg">
                <div className="flex justify-between"> <h1 className="text-2xl text-violet-700  font-semibold ">{Package}</h1><button className="bg-violet-200 text-violet-700 hover:text-orange-400 hover:bg-orange-100 w-16 rounded-full">{Duration}</button></div>
                <div className="flex w-full mt-5"><h1 className="text-5xl">{Amount}</h1><h3>{Currency}</h3></div>
                <div className="p-5">
                  <ul>
                  <li className="mb-2">Service 1</li>
                  <li className="mb-2">Service 2</li>
                  <li className="mb-2">Service 3</li>
                  <li className="mb-2">Service 4</li>
                  <li>Service 5</li>
                  </ul>
                </div>
                <div className="pl-12"><button className="text-white  rounded-md w-40 h-12 bg-violet-600">{Plan}</button>
        </div>
                </div>

        

    </div>
  );
}
const Prices1 = ({Package, Plan, Currency, Duration, Amount}) =>{

  return(

    <div className="p-5">
      
        <div className="shadow-sm w-80 p-5 rounded-lg h-96 border border-slate-300 hover:border-2 hover:border-green-700 hover:shadow-lg">
                <div className="flex justify-between"> <h1 className="font-semibold text-2xl text-green-700 ">{Package}</h1><button className="bg-green-100 text-green-700 hover:text-orange-400 hover:bg-orange-100 w-16 rounded-full">{Duration}</button></div>
                <div className="flex w-full mt-5"><h1 className="text-5xl">{Amount}</h1><h3>{Currency}</h3></div>
                <div className="p-5">
                  <ul>
                  <li className="mb-2">Service 1</li>
                  <li className="mb-2">Service 2</li>
                  <li className="mb-2">Service 3</li>
                  <li className="mb-2">Service 4</li>
                  <li>Service 5</li>
                  </ul>
                </div>
                <div className="pl-12"><button className="text-white  rounded-md w-40 h-12 bg-green-700">{Plan}</button>
        </div>
                </div>

        

    </div>
  );
}
const Prices2 = ({Package, Plan, Currency, Duration, Amount}) =>{

  return(

    <div className="p-5">
      
        <div className="shadow-sm w-80 p-5 rounded-lg h-96 border border-slate-300 hover:border-2 hover:border-orange-400 hover:shadow-lg">
                <div className="flex justify-between"> <h1 className="text-2xl font-bold ">{Package}</h1><button className="bg-orange-100 text-orange-400 hover:text-violet-400 hover:bg-violet-700 w-20 rounded-full">{Duration}</button></div>
                <div className="flex w-full mt-5"><h1 className="text-5xl">{Amount}</h1><h3>{Currency}</h3></div>
                <div className="p-5">
                  <ul>
                  <li className="mb-2">Service 1</li>
                  <li className="mb-2">Service 2</li>
                  <li className="mb-2">Service 3</li>
                  <li className="mb-2">Service 4</li>
                  <li>Service 5</li>
                  </ul>
                </div>
                <div className="pl-12"><button className="text-white  rounded-md w-40 h-12 bg-orange-400">{Plan}</button>
        </div>
                </div>

        

    </div>
  );
}

const ProjectsCard = ({category, name}) => {
  return(
          <div className=" w-80 border-2 border-violet-700 rounded-lg p-5">
            <div className="w-full h-56 bg-red-200 mb-2"></div>
            <div className=" w-full h-12 flex justify-between "><h1 className="text-xl font-bold">{name}</h1><button className="text-sm w-16 rounded-full h-8 text-violet-700 bg-violet-100">{category}</button></div>
            <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique autem, magni explicabo sequi adipisci nesciunt quos, inventore accusamus eius corporis, dolorum veritatis necessitatibus recusandae a dicta. Ipsa, dicta distinctio. Nihil?</p></div>
            <div className="mt-5 justify-center px-16 items-center"><button className="mx-auto rounded-md w-40 h-12 bg-violet-500 text-white">More Details</button></div>
            

          </div>
  );
}
const ProjectsCard1 = ({category, name}) => {
  return(
          <div className=" w-80 border-2 border-violet-700 rounded-lg p-5">
            <div className="w-full h-56 bg-red-200 mb-2"></div>
            <div className=" w-full h-12 flex justify-between "><h1 className="text-xl font-bold">{name}</h1><button className="text-sm w-16 rounded-full h-8 text-green-700 bg-green-100">{category}</button></div>
            <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique autem, magni explicabo sequi adipisci nesciunt quos, inventore accusamus eius corporis, dolorum veritatis necessitatibus recusandae a dicta. Ipsa, dicta distinctio. Nihil?</p></div>
            <div className="mt-5 justify-center px-16 items-center"><button className="mx-auto rounded-md w-40 h-12 bg-violet-500 text-white">More Details</button></div>
            

          </div>
  );
}
const ProjectsCard2 = ({category, name}) => {
  return(
          <div className=" w-80 border-2 border-violet-700 rounded-lg p-5">
            <div className="w-full h-56 bg-red-200 mb-2"></div>
            <div className=" w-full h-12 flex justify-between "><h1 className="text-xl font-bold">{name}</h1><button className="text-sm w-16 rounded-full h-8 text-yellow-700 bg-yellow-100">{category}</button></div>
            <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique autem, magni explicabo sequi adipisci nesciunt quos, inventore accusamus eius corporis, dolorum veritatis necessitatibus recusandae a dicta. Ipsa, dicta distinctio. Nihil?</p></div>
            <div className="mt-5 justify-center px-16 items-center"><button className="mx-auto rounded-md w-40 h-12 bg-violet-500 text-white">More Details</button></div>
            

          </div>
  );
}
const ProjectsCard3 = ({category, name}) => {
  return(
          <div className=" w-80 border-2 border-violet-700 rounded-lg p-5">
            <div className="w-full h-56 bg-red-200 mb-2"></div>
            <div className=" w-full h-12 flex justify-between "><h1 className="text-xl font-bold">{name}</h1><button className="text-sm w-16 rounded-full h-8 text-blue-700 bg-blue-100">{category}</button></div>
            <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique autem, magni explicabo sequi adipisci nesciunt quos, inventore accusamus eius corporis, dolorum veritatis necessitatibus recusandae a dicta. Ipsa, dicta distinctio. Nihil?</p></div>
            <div className="mt-5 justify-center px-16 items-center"><button className="mx-auto rounded-md w-40 h-12 bg-violet-500 text-white">More Details</button></div>
            

          </div>
  );
}


 
export {Blobs1, Blobs2, Blobs3, ServiceCard, ServiceCard2, ServiceCard3, ServiceCard4, Prices, Prices1, Prices2, ProjectsCard, ProjectsCard1, ProjectsCard2, ProjectsCard3}