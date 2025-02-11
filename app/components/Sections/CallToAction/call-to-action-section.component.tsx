import Link from 'next/link'
import { DiscordWidget, DevDiscordWidget, GradientLayer, ComHubWidget } from '@/app/components'
import { links, gradientSectionColors } from '@/app/utils'

type CTAWrapper = {
  children: React.ReactElement
  gradientColor: string
}

const CtaWrapper = ({ children, gradientColor }: CTAWrapper) => {
  return (
    <section
      id='discord'
      className='relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-gray-800/40 p-12 text-center shadow-xl md:flex-row'
    >
      <GradientLayer gradientColor={gradientColor} />
      {children}
    </section>
  )
}

export const CallToActionSection = () => {
  return (
    <div className='m-6 flex w-11/12 max-w-screen-xl flex-col gap-12 lg:flex-row'>
      <CtaWrapper gradientColor={gradientSectionColors.pink}>
        <div>
          <div className='px-12'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Commune Hub
            </h2>
            <p className='mt-4 text-base leading-7 text-gray-300'>
              Join Commune&apos;s Discord. Code, Connect, Innovate. 
              Shape the future together!
            </p>
          </div>

          <div className='overflow-y-scroll h-96 mt-6 flex-column items-center justify-center'>
            {/* <div className='lg:max-w-11/12 mt-8 flex w-full flex-col items-center justify-between rounded-2xl bg-gradient-to-br from-blue-600 to-gray-400 p-6 shadow-xl md:flex-row md:items-center lg:flex-col lg:items-center lg:px-6 xl:flex-row'>

              <iframe src="https://www.comhub.app/" height="200" width="500" title="Iframe Example"></iframe>
            </div> */}
            <ComHubWidget />
            <DiscordWidget />
            <DevDiscordWidget />


          </div>
        </div>
      </CtaWrapper>

      <CtaWrapper gradientColor={gradientSectionColors.red}>
        <div>
          <div className='px-12'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Commune Docs
            </h2>
            <p className='mt-4 text-base leading-7 text-gray-300'>
              Get started on Commune&apos;s environment – Create, and deploy
              your modules!
            </p>
          </div>

          <div className='mt-6 flex items-center justify-center'>
            <Link
              href={links.docs}
              target='_blank'
              className='text-md font-base mt-8 flex items-center justify-center p-6 leading-6 text-blue-300 hover:animate-scale-up-sm hover:text-blue-400 '
            >
              <span>Go to Docs →</span>
            </Link>
          </div>
        </div>
      </CtaWrapper>
    </div>
  )
}
