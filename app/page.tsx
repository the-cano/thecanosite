'use client'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { CardHoverEffect, hoverClassName } from './card-hover'
import { Time } from './time'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter, HiOutlineExternalLink, HiOutlineMail, SiAmazonaws, SiDocker, SiGit, SiGithub, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiNpm, SiPostgresql, SiRabbitmq, SiReact, SiServerless, SiSpotify, SiTailwindcss, SiTypescript, SiVisualstudiocode, SiVuedotjs, SiYarn } from 'react-icons/all'
import useSWR from 'swr'
import axios from 'axios'
import styles from "./page.module.css"

export default function Home() {
  const { data } = useSWR(
    "/api/nowplaying",
    (url) => axios.get(url).then((res) => res.data),
    { refreshInterval: 10000 }
  );

  const spotifyArtist = (artists : any) => {
    let artistString = ''
    artists.forEach((artist : any, i : number) => {
      artistString += ' ' + artist.name;
      if (i < artists.length - 1) artistString += ', '
    })
    return artistString
  }

  return (
   <main className="mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-40 pt-32">
    <div className='col-span-6 md:col-span-4 md:h-52'>
      <div className='relative group'>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative p-200 col-span-6 w-full flex items-center justify-between overflow-hidden rounded-2xl bg-black md:col-span-4 md:h-52 p-10">
          < Image
						src="/meSquare.jpg"
						height={96}
						width={96}
						className="h-24 w-24 space-y-3 rounded-full border border-pink-600 object-cover"
						alt="Photo of me"
					  />
          <div className="space-y-3">
                <h1 className="text-center mt-2 font-title text-xl font-bold tracking-tighter md:text-left sm:text-lg text-white">
                  alejandro cano (lele)
                </h1>

                <p className="text-center md:text-left text-white">
                  30 y/o full stack swoftware engineer
                </p>
            </div>
        </div>
      </div>
    </div>
    
      <CardHoverEffect className="h-full col-span-3 md:col-span-2 sm:col-span-3">
				<Link
					href="https://twitter.com/lelee_94"
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(
						'flex h-full items-center justify-center rounded-2xl bg-sky-500 text-7xl text-white',
						hoverClassName,
					)}
				>
					<span className="sr-only">Twitter</span>
					<span className="transform-gpu transition">
						<AiOutlineTwitter />
					</span>
				</Link>
			</CardHoverEffect>
     
      <div className="col-span-3 flex items-center justify-center rounded-2xl bg-indigo-700 p-6 text-fuchsia-100 md:col-span-2">
				<div className="grid w-full grid-cols-4 grid-rows-4 gap-4 [&>svg]:w-full [&>svg]:text-center">
					<SiTypescript size={24} />
					<SiDocker size={24} />
					<SiNextdotjs size={24} />
					<SiPostgresql size={24} />
					<SiReact size={24} />
					<SiTailwindcss size={24} />
					<SiNodedotjs size={24} />
					<SiJavascript size={24} />
					<SiAmazonaws size={24} />
					<SiNpm size={24} />
					<SiGit size={24} />
					<SiMongodb size={24} />
					<SiVisualstudiocode size={24} />
          <SiVuedotjs size={24} />
          <SiServerless size={24} />
          <SiRabbitmq size={24} />
				</div>
			</div>

      <CardHoverEffect className="col-span-4 h-full md:col-span-4">
				<Link
					href="https://github.com/the-cano"
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(
						'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
						hoverClassName,
					)}
				>
					<span aria-hidden className="pointer-events-none absolute inset-0 -z-20">
						<Image
							src="/githubBackground.jpg"
							alt="The Matrix scrolling characters effect"
							fill
							style={{objectFit: 'cover'}}
							className="brightness-[0.7]"
						/>
						<span className="absolute inset-0 bg-neutral-900/50" />
					</span>

					<span aria-hidden className="px-6 pt-6">
						<span className="flex justify-between">
							<SiGithub className="text-3xl" />
							<HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
						</span>
					</span>

					<span className="space-y-0.5 px-6 pb-6">
						<span className="block font-title font-bold">github</span>

						<span className="block text-sm">not so many stuff right now</span>
					</span>
				</Link>
			</CardHoverEffect>

      <Time/>
      
      <div className="col-span-3 grid grid-cols-1 gap-6 md:col-span-1">
        <CardHoverEffect className="row-span-1">
            <Link
              href="https://www.linkedin.com/in/alejandrocanocalvente/"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'flex h-full items-center justify-center rounded-2xl bg-blue-800 text-4xl text-white',
                hoverClassName,
              )}
            >
              <span className="sr-only">LinkedIn</span>
              <span className="transform-gpu transition">
                <AiOutlineLinkedin />
              </span>
            </Link>
          </CardHoverEffect>
          
          <CardHoverEffect className="row-span-1">
            <Link
              href="https://www.instagram.com/canoppics/"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'flex h-full items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-4xl text-white',
                hoverClassName,
              )}
            >
              <span className="sr-only">Instagram</span>
              <span className="transform-gpu transition">
                <AiOutlineInstagram />
              </span>
            </Link>
          </CardHoverEffect>
		</div>
    <CardHoverEffect className="col-span-3 h-full">
      <Link
					href={data ? data?.external_urls.spotify : ''}
					target="_blank"
					rel="noopener noreferrer"
					className={clsx(
						'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white',
						hoverClassName,
					)}
				>
					<span aria-hidden className="pointer-events-none absolute inset-0 -z-20">
						<Image
							src={ data ? data.album.images[0].url : '/spotifyLoader.jpg'}
							alt="Current Playing Song"
							fill
							style={{objectFit: 'cover'}}
							className="brightness-[0.9]"
						/>
						<span className="absolute inset-0 bg-neutral-900/50" />
					</span>

					<span aria-hidden className="px-6 pt-6">
						<span className="flex justify-between">
							<SiSpotify className="text-3xl" />
							<HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
						</span>
					</span>

					<span className="space-y-0.5 px-6 pb-6">
            <span className="flex justify-between">
              {data && <div className={styles.icon}>
                <span />
                <span />
                <span />
              </div>}
              <span>
                <span className="block font-title font-bold text-right ">{data ? data?.name : ''}</span>
                <span className="block text-sm text-right ">{data ? spotifyArtist(data?.artists) : ''}</span>
              </span>
            </span>
					</span>
				</Link>
			</CardHoverEffect>

      <CardHoverEffect className="col-span-6 md:col-span-6 h-full">
        <Link
            href="mailto:alejandro.canocalvente@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl text-white  bg-gray-800 p-6 dark:bg-gray-800',
              hoverClassName,
            )}
          >
            <span aria-hidden>
              <span className="flex justify-between">
                <h2 className="font-title text-xl font-bold">
                    hello there<span className="inline dark:hidden">⚡️</span>
                    <span className="hidden dark:inline">⚡️</span>
                </h2>
                <HiOutlineMail className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
              </span>
            </span>
            
            <div className='block' >
              Well, this is my site with a bit of me in it. I am a Software Engineer from Barcelona.
            </div>

            <div className='block' >
              As list of hobbies I love to play the guitar, I am always listening to music, I enjoy playing videogames and I am a 2 year crossfit trainee. Also I started indoor boulder climbing. Lets see how that goes.
            </div>
        </Link>
      </CardHoverEffect>
    </main>
  )
}
