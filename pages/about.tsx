import Navbar from "@/components/common_components/navigation";
import About_Banner from "@/components/about/about_banner";
import About_Content from "@/components/about/about_content";
import Monitor from "@/components/home/monitor";
import Footer from "@/components/common_components/footer";


export default function About(){
    return (
        <>
        <div>
            <Navbar/>
            <About_Banner/>
            <About_Content/>
            <Monitor/>
            <Footer/>
        </div>
        </>
    )
}