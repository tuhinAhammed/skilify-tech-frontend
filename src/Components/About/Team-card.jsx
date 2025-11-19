
const TeamCards = ({item}) => {
  return (
  <div className="bg-[url('/download.svg')] bg-[#F2F3F5] bg-no-repeat bg-center bg-contain w-[400px] h-[500px] rounded-[16px]">
    <div className=''>
    <img src={item.photo} alt="Team Photo" className="w-full h-auto p-4 rounded-[28px]"/>
    </div>
    <div className='ml-16'>
        {/* Additional team member details can be added here */}
        <h2 className="text-2xl font-bold mt-4">Our Dedicated Team</h2>
        <p className="text-gray-600 mt-2">Meet the professionals.</p>
    </div>

</div>
  )
}

export default TeamCards