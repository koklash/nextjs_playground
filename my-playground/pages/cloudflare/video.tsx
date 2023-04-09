import Navbar from "../../components/Navbar"

function VideoPlayer() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <br/>
      <iframe
				src="https://customer-m033z5x00ks6nunl.cloudflarestream.com/b236bde30eb07b9d01318940e5fc3eda/iframe?poster=https%3A%2F%2Fcustomer-m033z5x00ks6nunl.cloudflarestream.com%2Fb236bde30eb07b9d01318940e5fc3eda%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
				className="mx-auto my-auto"
        width="640" height="360"
				allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
      >
      </iframe>
    </div>
    

  )
    
  
}

export default VideoPlayer