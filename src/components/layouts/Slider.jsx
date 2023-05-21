const Slider = () => {
  return (
    <div className="carousel w-full md:h-[550px] h-[300px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/3W7TRc8/bbbbbbbbbbbb.jpg"
          className="w-full"
        />
        <div className="absolute flex items-center h-full left-0 top-0 max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="text-gray-600 space-y-7 pl-12 w-1/2">
            <h2 className="md:text-6xl text-3xl font-bold">
              All the latest Science toys
            </h2>
            <p className="display-hide-in-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur exercitationem molestiae quasi sunt
            </p>
            <div className="display-hide-in-sm">
              <button className="btn bg-orange-500 hover:bg-orange-600 mr-5">
                Shop now
              </button>
              <button className="btn hover:bg-orange-600">Explore more</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 max-w-7xl px-2 sm:px-6 lg:px-8">
          <a
            href="#slide4"
            className="btn btn-circle mr-5 bg-[rgba(21, 21, 21, 0)]"
          >
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/v1Sc6yR/bnnnn1.jpg" className="w-full" />
        <div className="absolute flex items-center h-full left-0 top-0 max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="text-gray-600 space-y-7 pl-12 w-1/2">
            <h2 className="md:text-6xl text-3xl font-bold">
              Care your baby with EDU
            </h2>
            <p className="display-hide-in-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              velit fuga adipisci?
            </p>
            <div className="display-hide-in-sm">
              <button className="btn bg-orange-500 hover:bg-orange-600 mr-5">
                Shop now
              </button>
              <button className="btn hover:bg-orange-600">Explore more</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 max-w-7xl px-2 sm:px-6 lg:px-8">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/LtjGNfs/bnnnn2.jpg" className="w-full" />
        <div className="absolute flex items-center h-full left-0 top-0 max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="text-gray-600 space-y-7 pl-12 w-1/2">
            <h2 className="md:text-6xl text-3xl font-bold">
              Robotic baby toys
            </h2>
            <p className="display-hide-in-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, quisquam.
            </p>
            <div className="display-hide-in-sm">
              <button className="btn bg-orange-500 hover:bg-orange-600 mr-5">
                Shop now
              </button>
              <button className="btn hover:bg-orange-600">Explore more</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 max-w-7xl px-2 sm:px-6 lg:px-8">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/g3Jr2GH/bnnnn3.jpg" className="w-full" />
        <div className="absolute flex items-center h-full left-0 top-0 max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="text-gray-600 space-y-7 pl-12 w-1/2">
            <h2 className="md:text-6xl text-3xl font-bold">
              Math toy for your baby
            </h2>
            <p className="display-hide-in-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              consectetur nemo vero?
            </p>
            <div className="display-hide-in-sm">
              <button className="btn bg-orange-500 hover:bg-orange-600 mr-5">
                Shop now
              </button>
              <button className="btn hover:bg-orange-600">Explore more</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl px-2 sm:px-6 lg:px-8 absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
