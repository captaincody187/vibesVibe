return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="bg-gray-100 flex justify-center items-center">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 px-9 gap-y-20">
            {pics.map((pic, i) => {
              return (
                <div className="relative" key={i}>
                  <img src={pic} alt={`Image ${i + 1}`} className='object-cover h-60 w-96' />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}