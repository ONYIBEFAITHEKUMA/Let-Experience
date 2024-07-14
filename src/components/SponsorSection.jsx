
import logo from "../assets/logo.png";

const SponsorSection = () => {
  return (
    <div className="bg-white p-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Sponsors</h2>
        <div className="overflow-hidden">
          <div className="flex space-x-12 animate-marquee ">
            <img src={logo} alt="Sponsor 1" className="h-20" />
            <img src={logo} alt="Sponsor 2" className="h-20" />
            <img src={logo} alt="Sponsor 3" className="h-20" />
            <img src={logo} alt="Sponsor 4" className="h-20" />
            <img src={logo} alt="Sponsor 5" className="h-20" />
          </div>
        </div>
    </div>
  )
}

export default SponsorSection

