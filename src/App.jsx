import './App.css';
import P1Image from '../public/P1.png'; // Import the image file

function App() {
  return (
    <div className='gradient-bg '>  
       <div className='grid md:grid-cols-[6fr_4fr] pt-10 pr-10'>
         <div className='grid pt-10'>
           <div className='m-6'>
             <p className='font-bold text-yellow-500 animated-outline bg-white p-4 rounded-3xl bg-opacity-25 text-7xl'>Chirayu Kanthasa's</p>
             <p className='font-bold text-yellow-400 text-6xl p-4 typing-animation'>Portfolio</p>
             <div>
                <a href="">
                  <button className='bg-orange-300 border-4 border-orange-400 shadow-2xl font-bold text-3xl rounded-2xl mx-10 mt-40 py-6 px-16'>
                    <p className='animate-bounce hover:text-blue-600 transition-all text-white'>View Here</p>
                  </button>
                </a>
             </div>
           </div>
         </div>
          <div className=''>
            <img src={P1Image} alt="" />
          </div>
       </div>
    </div>
  );
}

export default App;
