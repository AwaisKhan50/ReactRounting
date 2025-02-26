import { useParams } from 'react-router-dom'
const User = () => {
    const {userId}=useParams()
    return (
    <div className='text-center text-4xl my-30'>User: {userId} </div>
  )
}

export default User