const Map = () => {
  return (
    <div className="max-w-7xl px-2 py-8 sm:px-6 lg:px-8 mx-auto">
      <h4 className="text-2xl text-center text-gray-600 mb-3 py-4 uppercase font-bold">
        Our Location
      </h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57975.21456103299!2d90.37057385848875!3d24.745724443075286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f25b59e8581%3A0xb641503340702f96!2sMomenshahi%20Cantonment%2C%20Mymensingh!5e0!3m2!1sen!2sbd!4v1684571926923!5m2!1sen!2sbd"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
