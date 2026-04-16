import React from 'react';
import useFriendsdata from '../../hooks/useFriendsdata';
import Card from '../../components/card/Card';
import { BeatLoader } from 'react-spinners';


const Home = () => {
  const { friends, loading } = useFriendsdata();




  return (
    <div className=" ">
      <div  >
        <div className=" text-center mb-10 container mx-auto p-10 ">
          <h1 className="text-4xl font-bold text-slate-800">Friends to keep close in your life</h1>
          <p className="text-slate-500 my-4">Your personal shelf of meaningful connections...</p>
          <button className="btn bg-[#1a3a32] text-white rounded-lg">+ Add a Friend</button>
        </div>

        <div className="container w-[77%] mx-auto grid grid-cols-1  md:grid-cols-4 gap-6">

          <div className=" card card-dash bg-base-100 border border-gray-400 shadow-md ">
            <div className="card-body items-center lg:py-10 py-6">
              <h2 className="text-5xl font-bold">{friends.length}</h2>
              <p className="text-xs uppercase text-slate-400">Total Friends</p>
            </div>
          </div>

          <div className="card card-dash bg-base-100 border border-gray-400 shadow-md">
            <div className="card-body items-center lg:py-10 py-6">
              <h2 className="text-5xl font-bold">6</h2>
              <p className="text-xs uppercase text-slate-400">On Track</p>
            </div>
          </div>

          <div className="card card-dash bg-base-100 border border-gray-400 shadow-md">
            <div className="card-body items-center lg:py-10 py-6">
              <h2 className="text-5xl font-bold">6</h2>
              <p className="text-xs uppercase text-slate-400">Need Attention</p>
            </div>
          </div>

          <div className="card card-dash bg-base-100 border border-gray-400 shadow-md">
            <div className="card-body items-center lg:py-10 py-6">
              <h2 className="text-5xl font-bold">12</h2>
              <p className="text-xs uppercase text-slate-400">Interactions</p>
            </div>
          </div>

        </div>

        <hr className="border-gray-300 mt-10 container mx-auto" />
        <h2 className="text-2xl font-bold text-slate-800 container mx-auto mt-5 ">Your Friends</h2>

      </div>

      {loading ? <div className='flex justify-center items-center min-h-[300px] sm:min-h-[400px] w-full'>
        <BeatLoader size={15} />
      </div>
        : <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-10   container mx-auto'>
          {
            friends.map(friend => <Card key={friend.id} friend={friend}></Card>)
          }
        </div>}
       
    </div>

  );
};

export default Home;