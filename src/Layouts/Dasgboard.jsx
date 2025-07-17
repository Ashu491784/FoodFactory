import { useRef } from "react";
import { Link } from "react-router-dom";

const Dashboard  = () => {
    return ( 
<div className="flex min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
  {/* Sidebar */}
  <aside className="w-64 h-screen bg-gradient-to-b from-indigo-600 to-purple-600 shadow-xl p-6 hidden md:block animate-[slideInLeft_0.5s_ease-out_forwards]">
    <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
      <span className="bg-white text-indigo-600 p-1 rounded-lg">🍔</span>
      <span>K'A FoodCenter</span>
    </h2>
    <ul className="space-y-4">
      <li className="group">
        <Link to="/foodAddViews">
  <button className="flex items-center gap-3 text-indigo-100 hover:text-white px-4 py-3 rounded-lg transition-all duration-300 group-hover:bg-white/10 group-hover:translate-x-2">
    🏠 <span className="font-medium">Dashboard</span>
  </button>
</Link>
      </li>
      <li className="group">
        <Link to="/foodOrderItemss">
         <button  className="flex items-center gap-3 text-indigo-100 hover:text-white px-4 py-3 rounded-lg transition-all duration-300 group-hover:bg-white/10 group-hover:translate-x-2">
          <span className="font-medium">🍜 Foods</span>
        </button>
        </Link>
       
      </li>
      <li className="group">
        <button  className="flex items-center gap-3 text-indigo-100 hover:text-white px-4 py-3 rounded-lg transition-all duration-300 group-hover:bg-white/10 group-hover:translate-x-2">
          <span className="font-medium">📞 Contact</span>
        </button>
      </li>
      <li className="group">
        <button  className="flex items-center gap-3 text-indigo-100 hover:text-white px-4 py-3 rounded-lg transition-all duration-300 group-hover:bg-white/10 group-hover:translate-x-2">
          <span className="font-medium">⚙Settings</span>
        </button>
      </li>
    </ul>
  </aside>

  {/* Main Content */}
  <div
  className="min-h-screen w-full bg-cover bg-center p-6"style={{backgroundImage: "url('/images/463.jpg')"}}>

  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-20">
    <div className="flex justify-between items-center mb-8">
      <div className="flex flex-col items-start md:items-center text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 animate-[pulse_2s_infinite]">
          Don't Cook Today... <span className="text-indigo-600">🪴</span>
        </h1>
        <p className="text-gray-500 text-lg">
          Let's Order now and Try new flavour... <span className="text-purple-500 animate-[bounce_2s_infinite]">🍀</span>
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative text-gray-500 hover:text-indigo-600 text-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-12">
          🔔
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 animate-ping opacity-75"></span>
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
        </button>
      </div>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-blue-500 hover:border-blue-600">
        <p className="text-gray-500 mb-1 text-sm font-medium">👥 Total Users</p>
        <h2 className="text-4xl font-extrabold text-blue-600">1,204</h2>
        <div className="mt-4 h-2 bg-blue-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full animate-[progressBar_2s_ease-in-out_forwards]" style={{ width: '75%' }}></div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-green-500 hover:border-green-600">
        <p className="text-gray-500 mb-1 text-sm font-medium">💰 Revenue</p>
        <h2 className="text-4xl font-extrabold text-green-600">$32,500</h2>
        <div className="mt-4 h-2 bg-green-100 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 rounded-full animate-[progressBar_2s_ease-in-out_forwards]" style={{ width: '65%' }}></div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-purple-500 hover:border-purple-600">
        <p className="text-gray-500 mb-1 text-sm font-medium">📦 New Orders</p>
        <h2 className="text-4xl font-extrabold text-purple-600">158</h2>
        <div className="mt-4 h-2 bg-purple-100 rounded-full overflow-hidden">
          <div className="h-full bg-purple-500 rounded-full animate-[progressBar_2s_ease-in-out_forwards]" style={{ width: '85%' }}></div>
        </div>
      </div>
    </div>

    {/* Food Categories */}
    <div className="bg-white rounded-2xl shadow-lg p-6 animate-[fadeInUp_1s_ease-out_forwards]">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Popular Categories</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['🍕 Pizza', '🍔 Burgers', '🌭 HoteDog', '🍹 Juice'].map((category, index) => (
          <div 
            key={index}
            className="p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 text-center cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-100 hover:to-purple-100"
          >
            <span className="text-3xl mb-2 block">{category.split(' ')[0]}</span>
            <span className="font-medium text-gray-700">{category.split(' ')[1]}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

</div>


     );
}

export default Dashboard;