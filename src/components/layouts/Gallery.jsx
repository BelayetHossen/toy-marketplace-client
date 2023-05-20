const Gallery = () => {
  return (
    <div>
      <div className="max-w-7xl px-2 py-8 sm:px-6 lg:px-8 mx-auto">
        <h4 className="text-2xl text-center text-gray-600 mb-3 py-4 uppercase font-bold">
          Gallery
        </h4>
        {/* https://ibb.co/zN6R5qf https://ibb.co/rsP344y https://ibb.co/MMDL7sr
        https://ibb.co/XFYttbN https://ibb.co/5xjcwCk https://ibb.co/2c1c1j7 */}
        <div className="">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.ibb.co/1bzqnF2/g.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.ibb.co/sHSCyy3/G2.jpg"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.ibb.co/J5RPHKV/G3.jpg"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.ibb.co/SVfBBPW/g4.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.ibb.co/h1d8wrc/g5.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.ibb.co/xztztMS/g6.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
