import { useContext, useState } from "react";
import { FriendsContext } from "../../context/friendsContext";
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoCallImg from "../../assets/video.png";

const Timeline = () => {
  const { callFriend, textFriend, videocallFriend } = useContext(FriendsContext);
  const [filter , setFilter]=useState("all")
  const [search, setSearch] = useState("");
 



  return (
    <div className="container mx-auto  " >
      
      
      {
        callFriend.length=== 0 && textFriend.length === 0 && videocallFriend.length === 0 ? 
        
<div className="container mx-auto px-4 m-10">
  <div className  ="w-full  border border-gray-200 rounded-xl bg-white min-h-[250px]  flex items-center justify-center p-8">
    
    <div className="text-center">
      <h2 className="text-xl md:text-2xl font-semibold  ">
         No timeline available
      </h2>
    </div>
    
  </div>
</div> : <div className="p-4 ">
    <div className="max-w-4xl  mx-auto">
    <h2 className="text-2xl font-bold mb-4">Timeline </h2>
        

  <div className=" flex items-start justify-between gap-2 whitespace-nowrap ">
  <div className="dropdown"> 
  <div tabIndex={0} role="button" className="btn ">Filter timeline</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-3 shadow-sm">
    <li onClick={()=> setFilter("all")}><a>All</a></li>
    <li onClick={()=> setFilter("call")} ><a>Call</a></li>
    <li onClick={()=> setFilter("text")}><a>Text</a></li>
    <li onClick={()=> setFilter("video")}><a>Video</a></li>
  </ul>
</div>

  <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" 
  required placeholder="Search"
  onChange={(e) => setSearch(e.target.value.toLowerCase())}
  
  />

</label>


</div>

      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-3 mt-2">

        {(filter === "all" || filter === "call") && callFriend.filter((call) => call.name.toLowerCase().includes(search)).map((call, index) => (
          <div key={index} className="w-full">
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl shadow-inner">
                  <img src={callImg} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-800 leading-tight">
                  Audio Call <span className="text-slate-500 font-normal">with {call.name}</span>
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-1">{call.date}</p>
              </div>
            </div>
          </div>
        ))}

       
        {(filter === "all" || filter === "text")&&textFriend   .filter((text) => text.name.toLowerCase().includes(search)).map((text,index) => (
          <div key={index} className="w-full">
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-2xl shadow-inner">
                  <img src={textImg} alt="" />
                </div>
              </div>
              <div className="">
                <h3 className="text-base font-bold text-slate-800 leading-tight">
                  Message <span className="text-slate-500 font-normal">to {text.name}</span>
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-1">{text.date}</p>
              </div>
            </div>
          </div>
        ))}

  
        {(filter === "all" || filter === "video")&& videocallFriend .filter((video) => video.name.toLowerCase().includes(search)). map((video,index) => (
          <div key={index} className="w-full">
            <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
              <div>
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-2xl shadow-inner">
                  <img src={videoCallImg} alt="" />
                </div>
              </div>
              <div >
                <h3 className="text-base font-bold text-slate-800 leading-tight">
                  Video Call <span className="text-slate-500 font-normal">with {video.name}</span>
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-1">{video.date}</p>
              </div>
            </div>
          </div>

          
        ))}

      </div>
       </div>
    </div>
      }
    </div>

  );
};

export default Timeline;