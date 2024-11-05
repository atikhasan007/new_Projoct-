import { useSelector } from "react-redux"

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className="p-3 max-w-lg mx-auto">
        <h1 className='text-3xl font-semibold text-center my-7'>profile</h1>
        <form className="flex flex-col gap-4">
          <img src={currentUser.avatar} alt="profile" className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 "></img>

          <input type="text" placeholder="username" id="username" className="border p-3 rounded-lg"/>

          <input type="email" placeholder="email" id="email" className="border p-3 rounded-lg"/>

          <input type="password" placeholder="password" id="password" className="border p-3 rounded-lg"/>


          <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-80">update</button>
        </form>


      <div className="flex justify-between mt-5">
        <span className="text-red-700">Delete account</span>
        <span className="text-red-700">Sign out</span>
      </div>
      
    </div>
  )
}
