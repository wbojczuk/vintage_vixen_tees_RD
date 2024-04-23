import Custom from "@/app/(mainsite)/components/homepage/Custom/Custom";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Owned from "@/app/(mainsite)/components/homepage/Owned/Owned";
import Popular from "@/app/(mainsite)/components/homepage/Popular/Popular";


export default function Home() {
  return (
    <>
      <Header />
      <Owned />
      <Popular />
      <Custom />
    </>
  )
}
