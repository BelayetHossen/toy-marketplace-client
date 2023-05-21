import PageTitle from "../PageTitle";

const Blogs = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8">
      <PageTitle />
      <h4 className="text-3xl py-4 uppercase text-gray-700 font-bold text-center">
        Blogs by JHM
      </h4>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-orange-400">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </div>
        <div className="collapse-content bg-gray-300 text-gray-900">
          <p>
            My SPA application uses the following architecture (source): enter
            image description here This assumes that my client application knows
            about the refresh token, because I need it to request a new access
            token if no user credentials (e.g. email/password) are present. My
            question: Where do I store the refresh token in my client-side
            application? There are lots of questions/answers about this topic on
            SO, but regarding the refresh token the answer are not clear. Access
            token and refresh token shouldnt be stored in the local/session
            storage, because they are not a place for any sensitive data. Hence
            I would store the access token in a httpOnly cookie (even though
            there is CSRF) and I need it for most of my requests to the Resource
            Server anyway.
          </p>
        </div>
      </div>
      <div className="collapse mt-3">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-orange-400">
          1. Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content bg-gray-300 text-gray-900">
          <p>
            SQL databases are relational, and NoSQL databases are
            non-relational. SQL databases use structured query language (SQL)
            and have a predefined schema. NoSQL databases have dynamic schemas
            for unstructured data. SQL databases are vertically scalable, while
            NoSQL databases are horizontally scalable. SQL databases are
            table-based, while NoSQL databases are document, key-value, graph,
            or wide-column stores. SQL databases are better for multi-row
            transactions, while NoSQL is better for unstructured data like
            documents or JSON.
          </p>
        </div>
      </div>
      <div className="collapse mt-3">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-orange-400">
          1. What is express js? What is Nest JS?
        </div>
        <div className="collapse-content bg-gray-300 text-gray-900">
          <p>
            Express, is more lightweight and flexible, which makes it a popular
            choice for simple or small-scale APIs. NestJS provides a more
            structured and opinionated approach, which can make it easier to
            build complex APIs with proper separation of concerns
          </p>
        </div>
      </div>
      <div className="collapse mt-3">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-orange-400">
          1. What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content bg-gray-300 text-gray-900">
          <p>
            When working with data in MongoDB, you may quickly have to run
            complex operations, with multiple stages of operations to gather
            metrics for your project. Generating reports and displaying useful
            metadata are just two major use cases where MongoDB aggregation
            operations can prove incredibly useful, powerful, and flexible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
