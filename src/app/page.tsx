'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Container from './Container';
import Navigation from './Navigation';

export default function Home() {
  const data = [
    {
      title: 'Trying Something New',
      description:
        "Welcome to Insights by Nook. This idea was birthed from my inability to hit a publish/deploy button. As a test in consistency, I will release at least 1 creative or informative piece on here per month. Maybe it's a cool thought or design i've been working on, or maybe it's the struggles I face in a project. If nothing, this will serve as my unedited, unfiltered shower thoughts. ",
      image: '/PostImages/Nook.png',
      tags: ['Thoughts'],
      date: '2023-01-26'
    },
    {
      title: 'Tail Chasing Satisfaction',
      description:
        "I fully expect and am no stranger to change. Often when working on a project, I redo my main objective or design multiple times until I am completely satisfied with it. I stress over milleseconds of transition changes, because `something doesn't feel right`, or the hover state colours don't tickle my fancy. Which brings me to this web app/blog. I fully expect, and you should fully expect changes to this website - maybe its a change from hard coded blog posts, to a CMS. Maybe it's getting rid of the trendy horizontal scroll, or maybe a change in colours. Regardless, this website is indicative of my current tastes and inspirations, and I think the evolution of it will be intriguing to watch. Maybe in the future I'll document all the changes into some cool landing page or something!",
      image: '',
      tags: [],
      date: '2023-01-30'
    }
  ];

  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-100%`]);

  return (
    <main ref={scrollRef} className="relative w-screen bg-white" style={{ height: `${data.length * 800}px` }}>
      <Navigation className="fixed left-0 top-5 px-20" />
      <Container>
        <motion.div
          style={{ x, width: `${data.length * 800 - 500}px` }}
          className="relative flex h-[90%] flex-row space-x-8 divide-x overflow-visible"
        >
          {data.map((post, _index) => (
            <div key={_index} className="flex min-w-[750px] flex-row gap-x-6 pl-8">
              <div className="flex w-[25%] flex-col justify-between py-8">
                <div className="flex flex-col gap-y-8">
                  <div className="flex flex-col">
                    <h1 className="font-humane-regular text-7xl uppercase tracking-wide antialiased">insight</h1>
                    <h1 className="-mt-5 font-humane-bold text-9xl antialiased">{_index}</h1>
                  </div>
                  <div className="flex flex-row items-center gap-x-4">
                    <Image width={64} height={64} className="rounded-full" src="/Josh2.png" alt="Josh" />
                    <div className="flex flex-col text-lg">
                      <p className="">Josh</p>
                      <p className="-mt-1 font-semibold">Antoniuk</p>
                    </div>
                  </div>
                  {post.tags.length > 0 && (
                    <div className="flex flex-col">
                      <h2 className="font-bebas-neue text-xl">Tags:</h2>
                      {post.tags.map((tag) => (
                        <div
                          key={`${tag} ${_index}`}
                          className="self-start rounded-3xl bg-green px-4 py-2 text-sm text-white transition-all duration-100 hover:bg-green/80"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <h2 className="font-bebas-neue text-xl">Published:</h2>
                    <div className="text-sm text-black/70">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-full w-[75%] flex-col gap-y-2 py-8">
                {post.image !== '' && (
                  <Image
                    src={post.image}
                    width={200}
                    height={200}
                    alt="post"
                    className="w-full grow rounded-lg border"
                  />
                )}
                <h1 className="font-bebas-neue text-6xl font-thin uppercase tracking-wide antialiased">{post.title}</h1>
                <p className="text-sm">{post.description}</p>
              </div>
            </div>
          ))}
          <div className="absolute -right-[75%] flex h-full w-[350px] flex-col items-start justify-center gap-y-2 pl-14">
            <div className="font-humane-bold text-8xl uppercase">Fin.</div>
            <div className="horizPink py-1 font-bebas-neue text-4xl uppercase hover:px-2">Other Projects.</div>
            <div className="horizPink py-1 font-bebas-neue text-4xl uppercase hover:px-2">Say Hi.</div>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}
