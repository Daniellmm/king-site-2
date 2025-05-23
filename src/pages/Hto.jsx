import React from 'react'
import LOGO from '../assets/images/page-one/logoHto.png'
import CARD1 from '../assets/images/page-one/card.png'
import { infoCards, steps } from './constant'

const Hto = () => {
  return (
    <>
      <main className='overflow-hidden'>

        <section className='lg:px-20 px-5 hero min-h-[80vh] lg:min-h-[100vh]'>
          <header>
            <div>
              <nav>
                <img src={LOGO} className='py-5 lg:size-auto h-20' alt="" />
              </nav>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center'>
              <div className='lg:w-2/3 gap-y-4 pt-20 lg:pt-0 flex flex-col items-center justify-center'>
                <h1 className='lg:text-7xl text-4xl text-center lg:text-start text-white'
                  style={{ fontFamily: 'Minion Pro, serif' }}>
                  Turn Your Available Credit Into Cash- Quickly & Easily
                </h1>
                <p className='text-[#999999] text-xl text-center lg:text-start'>
                  Turn 100% of Your Credit Card Limits into cash deposited into your bank account Without the Stress
                </p>

                <div className='flex lg:justify-start justify-center items-center lg:items-start w-full'>
                  <button className='text-black bg-orange-400 rounded-3xl py-2 px-4'>
                    Book My Appointment Now
                  </button>
                </div>
              </div>


              <div className='lg:w-4/6 flex flex-col justify-end items-end'>
                <img src={CARD1} alt="" className='w-auto lg:h-[580px] pt-16 lg:pt-0 ' />
              </div>
            </div>
          </header>
        </section>

        <section className='lg:px-20 px-5 pt-20 pb-10 vid-sec min-h-[60vh]'>
          <div className='flex flex-col gap-y-10 lg:flex-row justify-evenly items-center'>

            <div className='lg:w-2/6 flex justify-center items-center'>
              <p className='text-[#999999] text-center lg:text-start text-lg'>
                Need fast access to cash? Our Credit Card Liquidation service helps you convert your entire credit limit into spendable cash—without losing the rewards and points you’ve earned.
                <br /><br />

                This is a 100% done-for-you service designed for entrepreneurs, business owners, and high performers who want cash flow without friction.
              </p>
            </div>

            <div className=''>
              <div className='lg:w-[500px] w-[400px] h-[300px] bg-[#999999]'></div>
            </div>

          </div>
        </section>

        <section className='lg:px-20 px-5 pt-20 card-sec pb-10 min-h-[80vh]'>
          <div className='flex flex-col justify-start items-start gap-y-20'>
            <div>
              <h1 className='text-[#D09A25] text-center lg:text-start text-4xl lg:text-6xl'
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Why Choose Our Credit Card Liquidation Service?
              </h1>
            </div>

            <div className='flex gap-10 flex-col lg:flex-row justify-center items-center w-full'>
              {infoCards.map((card) => (
                <div key={card} className='h-[250px] w-[250px] gap-2 rounded-2xl p-7 flex flex-col justify-centeritems-start'
                  style={{
                    background: 'linear-gradient(to bottom, #363636, #202020)',
                  }}
                >
                  <img src={card.imgPath} className='size-14' alt={card.title} />

                  <h1 className='text-white'
                    style={{ fontFamily: 'Minion Pro, serif' }}
                  >{card.title}</h1>
                  <p className='text-[#999999]'>{card.desc}</p>

                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='lg:px-20 px-5 pt-20 step-sec pb-32 min-h-[70vh]'>
          <div className='flex flex-col justify-center items-center gap-20'>
            {/* Title */}
            <div className='flex justify-start items-start w-full'>
              <h1 className='text-[#D09A25] text-center lg:text-start text-4xl lg:text-6xl'
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                How It Works (In 5 Simple Steps)
              </h1>
            </div>

            {/* Step Descriptions with Timeline */}
            <div className='w-full'>
              {/* Desktop Layout */}
              <div className='hidden lg:block'>
                <div className='flex flex-row justify-evenly w-full items-center gap-10'>
                  {steps.map((step) => (
                    <div key={step.number} className='flex flex-col justify-center items-start text-left'>
                      <h1 className='text-[#D09A25] text-6xl' style={{ fontFamily: 'Minion Pro, serif' }}>
                        {step.number}
                      </h1>
                      <h1 className='text-white font-light tracking-wider' style={{ fontFamily: 'Minion Pro, serif' }}>
                        {step.title}
                      </h1>
                      <h1 className='text-white font-light tracking-wider' style={{ fontFamily: 'Minion Pro, serif' }}>
                        {step.subtitle}
                      </h1>
                    </div>
                  ))}
                </div>
                {/* Desktop Timeline - Horizontal */}
                <div className='relative w-full flex flex-row items-center justify-between px-10 mt-10'>
                  <div className='absolute top-1/2 left-[40px] right-[40px] h-0.5 bg-[#D09A25] z-0' />
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className='w-4 h-4 bg-[#D09A25] rounded-full z-10'
                    />
                  ))}
                </div>
              </div>

              {/* Mobile Layout */}
              <div className='lg:hidden flex'>
                {/* Vertical Timeline */}
                <div className='flex flex-col items-center mr-6 pt-2'>
                  {steps.map((_, index) => (
                    <div key={index} className='flex flex-col items-center'>
                      <div className='w-4 h-4 bg-[#D09A25] rounded-full z-10' />
                      {index < steps.length - 1 && (
                        <div className='w-0.5 h-16 bg-[#D09A25] my-4' />
                      )}
                    </div>
                  ))}
                </div>

                {/* Step Content */}
                <div className='flex flex-col gap-8'>
                  {steps.map((step) => (
                    <div key={step.number} className='flex flex-col justify-center items-start text-left min-h-[80px]'>
                      <h1 className='text-[#D09A25] text-4xl' style={{ fontFamily: 'Minion Pro, serif' }}>
                        {step.number}
                      </h1>
                      <h1 className='text-white font-light tracking-wider' style={{ fontFamily: 'Minion Pro, serif' }}>
                        {step.title}
                      </h1>
                      <h1 className='text-white font-light tracking-wider' style={{ fontFamily: 'Minion Pro, serif' }}>
                        {step.subtitle}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='lg:px-20 px-5 pt-20 who-sec step-sec pb-32 min-h-[60vh]'>
          <div className='flex flex-col px-14 justify-center items-center gap-20'>
            {/* Title */}
            <div className='flex justify-start items-start w-full'>
              <h1 className='text-[#D09A25] text-center lg:text-start text-4xl lg:text-6xl'
                style={{ fontFamily: 'Minion Pro, serif' }}
              >
                Who Is This For?
              </h1>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>

              <div className='flex flex-row-reverse lg:flex-row justify-center items-center gap-10'>
                <div>
                  <h1 className='text-white' style={{ fontFamily: 'Minion Pro, serif' }}>
                    Business owners looking to scale
                  </h1>
                </div>

                <div>
                  <div className='flex flex-col-reverse justify-center items-center'>
                    <div className='border-[#D09A25] rounded-full size-7 border-2'></div>
                    <div className='border-[#D09A25] h-20 border'></div>
                  </div>
                </div>
              </div>


              <div className='flex flex-row-reverse lg:flex-row justify-center items-center gap-10'>
                <div>
                  <h1 className='text-white' style={{ fontFamily: 'Minion Pro, serif' }}>
                    Business owners looking to scale
                  </h1>
                </div>

                <div>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='border-[#D09A25] rounded-full size-7 border-2'></div>
                    <div className='border-[#D09A25] h-20 border'></div>
                  </div>
                </div>
              </div>

              <div className='flex flex-row-reverse lg:flex-row justify-center items-center gap-10'>
                <div>
                  <h1 className='text-white' style={{ fontFamily: 'Minion Pro, serif' }}>
                    Business owners looking to scale
                  </h1>
                </div>

                <div>
                  <div className='flex flex-col-reverse justify-center items-center'>
                    <div className='border-[#D09A25] rounded-full size-7 border-2'></div>
                    <div className='border-[#D09A25] h-20 border'></div>
                  </div>
                </div>
              </div>

              <div className='flex lg:hidden flex-row-reverse lg:flex-row justify-center items-center gap-10'>
                <div>
                  <h1 className='text-white' style={{ fontFamily: 'Minion Pro, serif' }}>
                    Business owners looking to scale
                  </h1>
                </div>

                <div>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='border-[#D09A25] rounded-full size-7 border-2'></div>
                    <div className='border-[#D09A25] h-20 border'></div>
                  </div>
                </div>
              </div>

              <div className='hidden lg:block'>
                <h1 className='text-white' style={{ fontFamily: 'Minion Pro, serif' }}>
                  Business owners looking to scale
                </h1>
              </div>
            </div>


          </div>
        </section>

        <section className='lg:px-20 px-5 pt-20  last-sec flex flex-col justify-center items-center pb-32 lg:min-h-[100vh]'>
          <div className='flex flex-col justify-center items-center gap-8'>
            <h1 className='text-white text-4xl lg:text-6xl' style={{ fontFamily: 'Minion Pro, serif' }}>
              Get Started Today
            </h1>

            <p className='text-[#999999] text-lg text-center'>Don’t let your available credit sit idle. Turn it into cash—and <br className='hidden lg:block' />opportunity. Click below to book your appointment and get started.
            </p>

            <div className='flex justify-center items-center w-full'>
              <button className='text-black bg-orange-400 rounded-3xl py-2 px-4'>
                Book My Appointment Now
              </button>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}

export default Hto