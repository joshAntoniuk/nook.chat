function Navigation({ className }: { className: string }) {
  return (
    <div className={`flex w-full flex-row items-center justify-between ${className}`}>
      <h1 className="font-humane-bold text-8xl uppercase text-black">
        Insights<span className="font-bebas-neue pl-3 text-xl">by nook</span>
      </h1>
      {/* <div className="flex flex-row items-center justify-between gap-x-8">
        <a href="#" className="px-4 py-2 text-black">
          Nook
        </a>
        <a href="#" className="py-2 pl-4 text-black">
          Contact
        </a>
      </div> */}
    </div>
  );
}
export default Navigation;
