'use client'
import OurComponent from "@/components/hiddenMore/page"
import CirclesOne from "@/components/rain/page"
import CirclesTwo from "@/components/wolkig/page"
import Header from "@/components/header/page"
import MyComponent from "@/components/hidden/page"

function Home() {
  return(
    <div>
      <Header/>
      <MyComponent/>
      <CirclesOne/>
      <OurComponent/>
      <CirclesTwo/>
    </div>
  )
}

export default Home