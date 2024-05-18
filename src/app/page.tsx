export default function Home() {
  return (
    <main className="p-4 h-[200rem]">
      <div className="w-full flex flex-row justify-evenly items-center gap-8">
        <div className="p-6 bg-primary rounded-2xl">
          <p className="text-background">Hello! my name is</p>
          <h1 className="py-2 text-7xl font-bold text-background">
            Kyle Palermo
          </h1>
          <p className="text-background">
            I am a software engineer that loves to build things.
          </p>
        </div>
        <div className="w-[20vw] h-[20vw] bg-primary -skew-x-12 rounded-2xl overflow-hidden relative">
          <div className="size-full flex flex-col absolute pointer-events-none">
            <div className="h-1/3 w-full bg-secondary/70 hover:bg-secondary/80 hover:h-1/2 duration-200 pointer-events-auto"></div>
            <div className="h-1/3 w-full bg-secondary/30 hover:bg-secondary/40 hover:h-1/2 duration-200 pointer-events-auto"></div>
          </div>
          <div className="size-full flex flex-row-reverse absolute pointer-events-none">
            <div className="w-1/3 h-full bg-secondary/70 hover:bg-secondary/80 hover:w-1/2 duration-200 pointer-events-auto"></div>
            <div className="w-1/3 h-full bg-secondary/30 hover:bg-secondary/40 hover:w-1/2 duration-200 pointer-events-auto"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
