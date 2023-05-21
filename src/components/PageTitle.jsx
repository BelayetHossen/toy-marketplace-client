import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = getPageTitle(location.pathname);
    document.title = pageTitle;
  }, [location]);

  const getPageTitle = (pathname) => {
    switch (pathname) {
      case "/":
        return "Home | BED Toys";
      case "/allToys":
        return "All toys | BED Toys";
      case "/myToys":
        return "My toys | BED Toys";
      case "/edit/*":
        return "Edit toy | BED Toys";
      case "/blogs":
        return "FAQ by JHM | BED Toys";
      case "/addToy":
        return "Add a toy | BED Toys";
      default:
        return "Not found pages";
    }
  };

  return null;
}

export default PageTitle;
