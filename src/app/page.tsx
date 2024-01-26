'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Container from './Container';
import Navigation from './Navigation';

export default function Home() {
  const data = [
    {
      title: 'Trying Something New',
      description:
        'Welcome to Insights by Nook. This idea was birthed from my reluctancy to release projects, and my inability to accept my own designs. I plan to write, draw, code, and post something once per month. If nothing, this serves as my personal, public, journal.',
      image: ''
    },
    {
      title: 'Lorem ipsum dolor sit',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit sapiente omnis! Blanditiis architecto est quaerat voluptates totam nulla ad cupiditate iusto, eius porro tempore vitae eaque voluptatum sunt qui, vero, mollitia iste voluptatem ipsum. Necessitatibus ea libero nihil dolorem inventore nesciunt ad vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit sapiente omnis! Blanditiis architecto est quaerat voluptates totam nulla ad cupiditate iusto, eius porro tempore vitae eaque voluptatum sunt qui, vero, mollitia iste voluptatem ipsum. Necessitatibus ea libero nihil dolorem inventore nesciunt ad vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit sapiente omnis! Blanditiis architecto est quaerat voluptates totam nulla ad cupiditate iusto, eius porro tempore vitae eaque voluptatum sunt qui, vero, mollitia iste voluptatem ipsum. Necessitatibus ea libero nihil dolorem inventore nesciunt ad vitae.',
      image: ''
    },
    {
      title: 'Trying Something New',
      description:
        'Welcome to Insights by Nook. This idea was birthed from my reluctancy to release projects, and my inability to accept my own designs. I plan to write, draw, code, and post something once per month. If nothing, this serves as my personal, public, journal.',
      image: ''
    },
    {
      title: 'Lorem ipsum dolor sit',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit sapiente omnis! Blanditiis architecto est quaerat voluptates totam nulla ad cupiditate iusto, eius porro tempore vitae eaque voluptatum sunt qui, vero, mollitia iste voluptatem ipsum. Necessitatibus ea libero nihil dolorem inventore nesciunt ad vitae.',
      image: ''
    }
  ];

  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-133%']);

  return (
    <main ref={scrollRef} className="relative h-[300vh] w-screen bg-white">
      <Navigation className="fixed left-0 top-5 px-20" />
      <Container>
        <motion.div style={{ x }} className="flex h-[90%] flex-row space-x-8 divide-x overflow-visible">
          {data.map((post, _index) => (
            <div key={_index} className="flex min-w-[750px] flex-row gap-x-6 pl-8">
              <div className="flex flex-col justify-between py-8">
                <div className="flex flex-col gap-y-8">
                  <div className="flex flex-col">
                    <h1 className="font-humane-regular text-7xl uppercase tracking-wide antialiased">insight</h1>
                    <h1 className="font-humane-bold -mt-5 text-9xl antialiased">220</h1>
                  </div>
                  <div className="flex flex-row items-center gap-x-4">
                    <div className="bg-green h-16 w-16 rounded-full" />
                    <div className="flex flex-col text-lg">
                      <p className="">Josh</p>
                      <p className="-mt-1 font-semibold">Antoniuk</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bebas-neue text-xl">Tags:</h2>
                    <div className="bg-green hover:bg-green/80 self-start rounded-3xl px-4 py-2 text-sm transition-all duration-100">
                      Development
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <div className="bg-green h-16 w-16 rounded-xl" />
                    <div className="bg-green h-16 w-16 rounded-xl" />
                    <div className="bg-green h-16 w-16 rounded-xl" />
                  </div>
                </div>
              </div>
              <div className="flex h-full flex-col gap-y-4 py-8">
                <div className="grow rounded-lg border" />
                <h1 className="font-bebas-neue text-6xl font-thin uppercase tracking-wide antialiased">{post.title}</h1>
                <p className="text-sm">{post.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </main>
  );
}
