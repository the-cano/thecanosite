'use client'
import clsx from 'clsx';
import {motion} from 'framer-motion';
import {useEffect, useRef, useState} from 'react';
import {ESTimeFormatter} from '../utils/constants';

function Night({time}: {time: Date}) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

      useEffect(() => {
        if (!canvasRef.current) return;
    
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
    
        // set canvas dimensions
        const isMobile = window.innerWidth < 768;
        canvas.width = isMobile ? window.innerWidth : window.innerWidth / 3;
        canvas.height = isMobile ? window.innerHeight : window.innerHeight / 3;
    
        // draw some stars
        for (let i = 0; i < 100; i++) {
            if (ctx) {
                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(
                  Math.random() * canvas.width,
                  Math.random() * canvas.height,
                  Math.random() * 2,
                  0,
                  Math.PI * 2
                );
                ctx.fill();
            }
        }
      }, []);

      return (
        <div className="bg-[#001324] first-letter:w-full relative w-56 flex overflow-hidden rounded-2xl">
          <canvas
            className="absolute inset-0 h-full w-full opacity-70 md:opacity-100"
            ref={canvasRef}
          />
          <div className="flex w-full items-center justify-center">
				<div className="opacity-85 flex items-baseline space-x-1 md:space-x-2">
					<div className="flex flex-col">
						<div className="font-title text-4xl text-white">{ESTimeFormatter.format(time)}</div>
						<p
							className={clsx('text-center text-xl font-light', 'text-white text-glow-sky-900 dark:text-glow-sky-500')}
						>
							in spain
						</p>
					</div>
				</div>
			</div>
          <motion.div
            animate={{
              scale: [1, 1.1, 1.1, 1, 1],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-0 right-0 rounded-tl-full bg-white/10 pt-2 pl-2 md:pt-4 md:pl-4"
          >
            <motion.div>
              <div className="md:pt-4 md:pl-4 pt-2 pl-2 bottom-0 right-0 bg-white/20 rounded-tl-full">
                <div className="md:pt-4 md:pl-4 pt-2 pl-2 bottom-0 right-0 bg-white/20 rounded-tl-full">
                  <motion.div
                    initial={false}
                    animate={{
                      scale: [1, 0.9, 0.9, 1, 1],
                    }}
                    transition={{
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="bg-[#DFDFDF] w-10 h-10 lg:w-10 lg:h-10 xl:w-16 xl:h-16 rounded-tl-full  relative"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      );
}

function Day({time}: {time: Date}) {
	return (
		<div className="relative w-56 flex overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A8DFF] to-[#98CFFF] first-letter:w-full">
			<div className="flex w-full items-center justify-center">
				<div className="opacity-85 flex items-baseline space-x-1 md:space-x-2">
					<div className="flex flex-col">
						<div className="font-title text-4xl sm:text-2xl text-white">{ESTimeFormatter.format(time)}</div>
						<p
							className={clsx('text-center text-xl font-light', 'text-white text-glow-sky-900 dark:text-glow-sky-500')}
						>
							in spain
						</p>
					</div>
				</div>
			</div>

			<motion.div
				aria-hidden
				animate={{
					scale: [1, 1.1, 1.2, 1],
				}}
				transition={{
					duration: 4,
					ease: 'easeInOut',
					repeat: Infinity,
					repeatType: 'reverse',
				}}
				className="pointer-events-none absolute bottom-0 right-0 rounded-tl-full bg-white/10 pt-2 pl-2 md:pt-4 md:pl-4"
			>
				<motion.div>
					<div className="md:pt-4 md:pl-4 pt-2 pl-2 bottom-0 right-0 bg-white/20 rounded-tl-full">
						<div className="md:pt-4 md:pl-4 pt-2 pl-2 bottom-0 right-0 bg-white/20 rounded-tl-full">
							<motion.div
								initial={false}
								animate={{scale: [1, 0.9, 0.9, 1, 1]}}
								transition={{
									duration: 4,
									ease: 'easeInOut',
									repeat: Infinity,
									repeatType: 'reverse',
								}}
								className="relative w-10 h-10 lg:w-10 lg:h-10 xl:w-16 xl:h-16 rounded-tl-full  bg-yellow-200"
							/>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
}

export function Time() {
	const [time, setTime] = useState(() => new Date());

	const isNight = time.getHours() >= 17 || time.getHours() < 6;

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="col-span-2 flex h-52 grid-cols-2 md:col-span-2">
			{isNight ? <Night time={time} /> : <Day time={time} />}
		</div>
	);
}