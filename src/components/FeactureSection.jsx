

const FeactureSection = () => {
  return (
    <div className="bg-white text-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='w-auto'>
            <h1 className="text-4xl font-bold mb-4">Event Schedule</h1>
            <p className="mb-8 max-w-lg">The Enugu TxE Summit 2023 will be a one-day event focusing on a variety of different themes.</p>
          </div>

          <div className='p-8 lg:ml-20'>
            <p className='min-w-max text-center text-xl mb-2'>18th November, 2024</p>
            <div className='flex gap-4 justify-center'>
              <div className='h-1 w-32 bg-blue-500'></div>
              <div className='h-1 w-32 bg-white'></div>
            </div>
          </div>
        </div>

        <div className="flex ">
          <div className="">
            <h2 className="text-2xl font-bold text-blue-500 mb-4">Entrepreneurship</h2>
            <p className="mb-4 text-sm">A 1-day interactive workshop and fireside chat with leading experts from leading tech companies including Google.</p>

            <h3 className="text-xl font-semibold mb-2 pt-8">Idea Pitch Session</h3>
            <p className="mb-4 text-sm">Innovative businesses will be given an opportunity to pitch their ideas and business solutions to a panel of judges and receive feedback.</p>

            <h3 className="text-xl font-semibold mb-2 pt-8">Entrepreneurship</h3>
            <p className="mb-4 text-sm">A 1-day interactive workshop and fireside chat with leading experts from leading tech companies including Google.</p>

            <h3 className="text-xl font-semibold mb-2 pt-8">Grants and Support for Startups</h3>
            <p className="mb-4 text-sm">Innovative businesses will stand a chance to be awarded seed fund grants to encourage their ventures.</p>
          </div>

          <div className="border-l-2 border-blue-500 h-auto mx-4 lg:mx-8"></div>

          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-blue-500 mb-4">Tech Skill Boost</h2>
            <p className="mb-4 pb-4">An interactive workshop and fireside chat with leading experts from leading tech companies including Google.</p>

            <h3 className="text-xl font-semibold mb-2">In-demand skills</h3>
            <p className="mb-4">Learn which skills are most sought after.</p>

            <h3 className="text-xl font-semibold mb-2 pt-8">Learning opportunities & resources</h3>
            <p className="mb-4">How and where to learn those skills.</p>

            <h3 className="text-xl font-semibold mb-2 pt-8">Securing employment</h3>
            <p className="mb-4">How to use your skills to work for global tech companies remotely from Enugu and earn in dollars.</p>

            <h3 className="text-xl font-semibold mb-2 pt-8">Q&A with Top Tech Talents</h3>
            <p className="mb-4">Ask experienced tech employees questions and get feedback from them directly.</p>

            <h3 className="text-xl font-semibold mb-2 pt-8">Scholarships & Devices</h3>
            <p className="mb-4">1000 scholarships and 200 devices to jumpstart training and career.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FeactureSection;