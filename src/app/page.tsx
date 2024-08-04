import InfoBar from "~/components/InfoBar/InfoBar.component";

const MockUser = {
  userName: "Colm Tuite",
  action: "created a new story",
  timeStamp: "2 hours ago",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white px-4">
      <div className="flex flex-col md:flex-row w-full max-w-7xl">
        <div className="flex-col w-full md:w-3/4 p-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Welcome to Blurble
          </h1>
          <h2 className="text-2xl font-semibold tracking-tight mt-4 sm:text-3xl">
            A new way to create and share stories.
          </h2>
        </div>
        <div className="flex-col w-full md:w-1/4 p-4 mt-8 md:mt-0">
          <h1 className="text-lg font-semibold">Recent Activity</h1>
          <InfoBar {...MockUser} />
          <InfoBar {...MockUser} />
          <InfoBar {...MockUser} />
          <InfoBar {...MockUser} />
        </div>
      </div>
    </main>
  );
}
