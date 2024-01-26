'use client';

function Container({ children }: { children?: any }) {
  return (
    <div className="sticky top-0 flex h-[100vh] w-full items-end overflow-hidden px-20 pb-10">
      <div className="h-[85%] w-full overflow-hidden rounded-lg border-4 border-black">
        <div className="h-[10%] w-full border-b border-black bg-black/15" />
        {children}
      </div>
    </div>
  );
}
export default Container;
