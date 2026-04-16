
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendsContext } from '../../context/friendsContext';


const Stats = () => {
 const { callFriend, textFriend, videocallFriend } = useContext(FriendsContext);
 const noData = callFriend.length === 0 && textFriend.length === 0 && videocallFriend.length === 0

    const data = [
  { name: 'Text', value: textFriend.length, fill: '#7f37f5' },
  { name: 'Call', value: callFriend.length, fill: '#244d3f' },
  { name: 'VideoCall', value: videocallFriend.length, fill: '#37a163' },
  
];
    return (
<div className=' container mx-auto '>

{
  noData ? <div>
    <div className="container mx-auto px-4 m-10">
          <div className="w-full border border-gray-200 rounded-xl bg-white min-h-[250px] flex items-center justify-center p-8">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-semibold">
                No analytics available
              </h2>
            </div>
          </div>
        </div>
  </div> : <div className='m-2'>
    <h1 className='font-bold md:text-2xl mt-6' >Friendship Analytics</h1>
    
<div className="my-10 shadow-lg p-5 md:p-10 rounded-md border border-slate-100 bg-white ">
<p className='font-semibold mb-5'>By Interaction Type</p>

    <PieChart style={{ width: '300px', height: '300px', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 , margin: 'auto' }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        cornerRadius="50%"
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
     <Legend />
     <Tooltip />
    </PieChart>
        </div>
        
  </div>
}


        
        
        
        
        
        </div>
    );
};

export default Stats;