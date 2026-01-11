'use client'
import { useEffect } from "react";
export default function Home() {

useEffect(()=>{
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('menu')

  if(!btn || !nav) return;

  btn.addEventListener('click', ()=>{
    btn.classList.toggle('open')
      nav.classList.toggle('hidden')
  })

})
  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <img src="img/logo.svg" alt="" />
          </div>
          {/* Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Communuty
            </a>
          </div>

          {/* Button */}
          <a href="#" className="hidden md:block bg-brightRed p-3 px-6 text-white rounded-full hover:bg-brightRedLight">
            Get Started
          </a>
          {/* Hanburger */}
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-buttom"></span>
          </button>
        </div> 

        {/* Mobile Menu */}
        <div className="">
          <div 
          id="menu"
          className="hidden absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
>
            <a href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Communuty
            </a>
          </div>
        </div>
      </nav>

      <section id="hero">
        <div className="container flex flex-col-reverse md:flex-row max-auto items-center mt-1 space-y-10 md:space-y-0">
          {/* Left Item */}
          <div className="flex flex-col md:w-1/2 space-y-6">
            <h1 className="max-w-md text-4xl md:text-5xl font-bold text-center md:text-left">
              Bring everyone together to build better products
            </h1>
            <p className="max-w-sm text-center md:text-left text-darkGrayishBlue">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="#" className="hidden md:block bg-brightRed p-3 px-6 text-white rounded-full hover:bg-brightRedLight">
                Get Started
              </a>
            </div>
          </div>

          {/* Righ Hero Images */}
          <div className="md:h-1/2 flex justify-center">
            <img src="img/illustration-intro.svg" className="w-[75%]" alt="" />
          </div>
        </div>
      </section>
    {/* Feature Section */}
      <section id="feature">
        <div className="container m-10 flex flex-col md:flex-row px-4 mx-auto mt-10 space-y-12 md:space-y-0">
          {/* Features Left */}
          <div className="flex flex-col space-y-10 md:w-1/2 ">
            <h2 className="max-w-md text-3xl font-bold text-center md:text-left">
              What's different about Manage?
            </h2>
            <p className="max-w-sm text-center md:text-left text-darkGrayishBlue">
              Mamage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          {/* Features Right */}
          {/* Numbers List */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* List Item 1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Header */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p className="text-darkGrayishBlue">
                  See how your day-to-day tasks fit into the wider vision. Go from
                  tracking progress at the milestone level all the way done to the
                  smallest of details. Never lose sight of the bigger picture
                  again.
                </p>
              </div>
            </div>

            {/* List Item 2 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Header */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Advanced built in report
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Advanced built in report
                </h3>
                <p className="text-darkGrayishBlue">
                  Set internal delivery estimates and track progresstoward company
                  goals. Our customisable dashboard helps youbuild out the reports
                  you needto keep key stakeholders informed.
                </p>
              </div>
            </div>

            {/* List Item 3 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Header */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Everything you want in one place
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Everything you want in one place
                </h3>
                <p className="text-darkGrayishBlue">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share document. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section id="testimonial">
        {/* Heading and Testimonial Containet */}
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">

          {/* Heading */}
          <h2 className="text-4xl font-bold text-center">
            What they've said
          </h2>

          {/* Testimonials Container */}
          <div className="flex flex-col mt-24 md:flex-row md:space-y-3">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center p-6 mb-5 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="img/bin_uthman-removebg-preview.png" className="rounded-full bg-gray-700 w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Ayuba Usman</h5>
              <p className="text-sm  ">
                "Hacking with honor, protecting with passion, making cyberspace secure for all users,
                safeguarding digital assets, ensuring online trust,
                and empowering a safer digital tomorrow in a rapidly evolving tech world 😎🔒💕🌐🚀💻"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col items-center p-6 mb-5 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="img/aisha.png" className="rounded-full bg-gray-700 w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Aisha Muhammad Makuku</h5>
              <p className="text-sm ">
                "Merging data and DNA, computing life's complexity, and driving discoveries in genomics,
                proteomics, and beyond, with expertise and passion 🔬💻🧬🌐"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col items-center mb-5 p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="img/khadija.png" className="rounded-full bg-gray-700 w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Khadija Hassan</h5>
              <p className="text-sm">
                "Where numbers meet wisdom,
                financial decisions lead to growth and stability, backed by accurate books,
                sharp analysis, and trusted advice 📈💻🔒💯"
              </p>
            </div>
          </div>
          <div className="my-5 mt-3">
            {/* Button */}
            <a href="#" className="bg-brightRed p-3 px-6 text-white rounded-full hover:bg-brightRedLight">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-brightRed">
        {/* Flex Container */}
        <div className="container flex flex-col items-center justify-between mt-12 px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          {/* Heading */}
          <h5 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplefy how your team works today
          </h5>

          {/* Buttom */}
          <div className="">
            <a
              href="#"
              className="p-3 px-6 pt-3 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
            >
              Get Started
            </a>
          </div>

        </div>
      </section>
      {/* Footer  */}
      <footer className="bg-veryDarkBlue">
        {/* Flex Container */}
        <div className="containe flex flex-col items-center justify-between px-20 py-10 mx-auto space-y-8 md:flex-row  md:space-y-0">

          {/* Logo and Social Link Container */}
          <div className="flex flex-col items-center justify-between space-y-12 md:f md:space-y-10 md:items-start">
            {/* Logo */}
            <div className="">
              <img src="img/logo.svg" className="h-8" alt="" />
            </div>
            {/* Social Link Container */}
            <div className="flex justify-center space-x-4">
              {/* Link 1 */}
              <a href="#">
                <img src="img/icon-facebook.svg" className="h-8" alt="" />
              </a>
              {/* Link 2 */}
              <a href="#">
                <img src="img/icon-youtube.svg" className="h-8" alt="" />
              </a>
              {/* Link 3 */}
              <a href="#">
                <img src="img/icon-twitter.svg" className="h-8" alt="" />
              </a>
              {/* Link 4 */}
              <a href="#">
                <img src="img/icon-pinterest.svg" className="h-8" alt="" />
              </a>
              {/* Link 5 */}
              <a href="#">
                <img src="img/icon-instagram.svg" className="h-8" alt="" />
              </a>
            </div>
          </div>
          {/* List items */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="" className="hover:text-brightRed">Home</a>
              <a href="" className="hover:text-brightRed">Pricing</a>
              <a href="" className="hover:text-brightRed">Products</a>
              <a href="" className="hover:text-brightRed">About</a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="" className="hover:text-brightRed">Careers</a>
              <a href="" className="hover:text-brightRed">Communuty</a>
              <a href="" className="hover:text-brightRed">Privacy Policy</a>
            </div>

          </div>
          {/* Input Area */}
          <div className="flex flex-col justify-between">
            <form action="">
              <div className="flex space-x-4">
                <input
                  type="text"
                  className="flex-1 bg-amber-50 p-2 px-4 rounded-full focus:outline-none"
                  placeholder="Your text here"
                />
                <button className="px-4 py-2 text-white rounded-full bg-brightRed hove:bg-brigtRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Copyright text for small screen */}
        <div className="mx-auto p-6 text-center text-white ">
          Copyright &copy; 2024, All Right Reserved
        </div>
      </footer>
    </>
  );
}
