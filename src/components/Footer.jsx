import instagram from "../assets/instagram.svg"
import whatsapp from "../assets/whatsapp.svg"
import mail from "../assets/mail.svg"
import img1 from "../assets/images/1.png"
import img2 from "../assets/images/2.png"
import img3 from "../assets/images/3.png"

const Footer = () => {
  return (
    <footer id="contact" className="bg-green-900 mx-auto max-w-9/10 mt-10 text-white px-6 py-6 sm:px-10 sm:py-10 m-10 grid md:grid-cols-2 gap-10">
      <div className="">
        <div>
        <h4 className="text-lg sm:text-3xl mb-5 font-normal font-chillax">DD Nature</h4>
        <p className="text-[14px] opacity-80 mt-5 w-full sm:w-3/4 sm:text-[17px] sm:ml-2">
          Honoring our heritage through every drop — pure, authentic, and 
          naturally wholesome Mara Chekku oils for your family’s wellbeing.
        </p>
        </div>
        <div>
          <h2 className="text-lg sm:text-3xl my-5 font-chillax font-normal">Follow Us</h2>
          <div className="flex gap-5 ml-2">
          <a href="https://www.instagram.com/ddnature_oil/"><img src={instagram} className="h-8 cursor-pointer"/></a>
          <a href="https://wa.me/918807455038"><img src={whatsapp} className="h-8"/></a>
          <a href="mailto:ddnature.oil@gmail.com"><img src={mail} className="h-8"/></a>
        </div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-3">Instagram Shop</h4>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-teal-900 w-full rounded-lg">
            <img src={img1}/>
          </div>
          <div className="bg-teal-900 w-full rounded-lg">
            <img src={img2} className="h-full w-full object-cover"/>
          </div>
          <div className="bg-teal-900 w-full rounded-lg">
            <img src={img3} className="h-full w-full object-cover"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
