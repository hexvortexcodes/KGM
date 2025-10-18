export default function Banner() {
  return (
    <div className="h-75 flex flex-col align-center justify-center gap-2 border-b px-[100px]">
      <h1 className="font-bold text-2xl">Essential tools designed to make your day more productive.</h1>
      <div className="border w-fit p-2">
        <input className="outline-none" name="search" />
        <label className="">search</label>
      </div>
    </div>
  );
}
