import React from 'react';
import { Link } from 'react-router';


const Card = ({ friend }) => {
  const { name, picture, days_since_contact, status, tags } = friend;



  return (
    <div>   
      <Link to={`/friendsdetails/${friend.id}`} className="card w-full bg-white shadow-sm border border-gray-300 rounded-2xl">
        <div className="card-body items-center text-center p-6">
          <div className="avatar mb-2">
            <div className="w-20 rounded-full">
              <img src={picture} alt="profile" />
            </div>
          </div>

          <h2 className="card-title text-gray-800 font-bold text-lg mb-0">{name}</h2>
          <p className="text-[11px] text-gray-400 mb-4">{days_since_contact}d ago</p>


          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {
              tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                >
                  {tag}
                </div>
              ))
            }
          </div>


          <div className="card-actions">
            <div className={`badge border-none text-white text-[10px] font-bold py-3.5 px-5 rounded-full uppercase tracking-wider 
            ${status === "Overdue" ? "bg-[#EF4444]" : ""}
            ${status === "On-Track" ? "bg-[#064E3B]" : ""}
            ${status === "Almost Due" ? "bg-[#F59E0B]" : ""}
            
            
            `}>
              {status}
            </div>
          </div>

        </div>
      </Link>
    </div>
  );
};

export default Card;