import Link from "next/link";
export default function AboutUs(){
    return(
        <div>

          <div className="h-[580px]  rounded-[40px]  bg-gradient-to-tr from-blue-900 via-red-900 to-black text-white " >
              <div className="bg-gray-900 h-[50px] flex justify-end border-1 border-black" >
              <button className="text-white  bg-green-700 rounded-[5px] w-[80px] h-[30px] mr-[20px] mt-[10px]">Buy now</button>
                  </div>
          <div className=" bg-gray-900  flex flex-row space-x-10 md:w-[1000px] w-full rounded-[20px] h-[80px] items-center md:ml-[140px] border-1 border-black" >
          <div className="h-[100px] w-[200px] mt-[70px] ml-[30px]">  
          <img src="https://themehealer.com/php-template/crank-php/assets/images/resources/logo-1.png"/>
          </div>  
         
         <div className="h-[50px] w-[160px]  mx-150px flex flex-row " >
          <div className=" mt-[13px]  ml-[100px] text-white underline hidden md:block">Home  </div></div>
          <div className="  hidden md:block text-white underline">AboutUs  </div>
          <div className=" hidden md:block text-white underline">Pages  </div>
          <div className=" hidden md:block text-white underline">Services </div>
          <div className=" hidden md:block text-white underline">Shop  </div>
          <div className="hidden md:block text-white underline">Blog </div>
          <div className="hidden md:block text-white underline">Contact  </div>
         
        </div>
         <div className=" flex flex-row ">
        <div className="flex flex-col">   <h2 className="text-white font-bold mt-[200px] text-4xl md:ml-[140px] ml-10" >About Us</h2>
            <h4 className="text-2xl text-white font-bold  w-full md:ml-[140px] ml-10 mt-[5px]"><Link href="/">Home </Link>~  About Us</h4></div> 
            <div className="ml-[400px] h-[200px] mt-[80px] h-[200px] w-[500px]">
            <img src="https://themehealer.com/php-template/crank-php/assets/images/resources/page-header-img-1.png"/>
            </div>
            
          </div>
           <div className="md:h-[200px]  text-7xl h-[300px]  md:mx-100px flex flex-col bg-white md:ml-[200px] mt-[170px] md:w-[900px] w-full py-[80px]" >
         <div><h1  className="text-black font-bold md:ml-0 ml-27">600+</h1><h2 className="flex flex-col text-xl text-black md:ml-[10px]  ml-27">Team Member</h2></div> 
         <div className="md:absolute"> <h1  className="text-black font-bold  md:ml-[250px]  ml-27">2k+</h1><h2 className="flex flex-col text-black text-xl md:ml-[240px]  ml-27">Service Complete</h2></div>
          <div className="md:absolute"> <h1  className="text-black font-bold  md:ml-[450px]  ml-27">53+</h1><h2 className="flex flex-col text-black text-xl md:ml-[450px]  ml-27">Winning Award</h2></div>
          <div className="md:absolute"> <h1  className="text-black font-bold  md:ml-[650px]  ml-27">3k+</h1><h2 className="flex flex-col text-black text-xl md:ml-[640px]  ml-27">Client Review</h2></div>
         </div>
         <div className="flex md:flex-row flex-col">
             
           <div className="text-red-500 md:ml-[150px] h-[500px] mt-[200px] flex flex-col font-bold ml-7">ABOUT US
            <div className="text-black font-bold text-2xl flex flex-col  flex flex-col  "> Fast and Reliable Car Care<br></br>
                Your Car Our Priority 
             </div> 
             <div className="flex flex-col text-black">
               <h2 className="text-black mt-[10px]">Car service is essential for maintaining the performance and longevity <br></br>of your vehicle. From oil changes</h2>
          <br></br>  <h3 className="mt-[10px]">Fast and Reliable Car Care Your Car Our Priority</h3>
           <br></br> <h3>Free with Our Services Care for Your Car </h3>
            <br></br> <h3>Top-notch Care for Your Vehicle Your Vehicle </h3>
             <br></br>  <h3>Expert Service for Your Vehicle Drive Stress</h3>
              <br></br>  <h3>Your Trusted Car Service Provider Keeping</h3>
             </div>
               
             <div className="flex md:flex-row flex-col md:ml-[150px] absolute"> 
               <img src="https://themehealer.com/php-template/crank-php/assets/images/resources/about-one-img-1.jpg"className="hidden md:block rounded-[50px] md:ml-[500px] md:h-[400px] md:w-[500px] w-full h-[320px] flex md:flex-row flex-col "/>
                
                </div>
             </div>
           </div> 
        </div>
        </div>
       
    )
}