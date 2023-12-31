import { useEffect } from "react";
import { useNews } from "../context/Context";
import "./css/Home.css";

const Science = () => {
  const x = useNews();

  useEffect(() => {
    x.scienceData();
  }, []);

  return (
    <>
      {!x.science ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <div className="container-fluid py-5">
            <div className="row">
              <div className="col-12">
                <h1 className="heading mb-3 px-4">Science</h1>
              </div>
            </div>

            <div className="row">
              {x.science?.map((i, ind) => (
                <div
                  key={ind}
                  className="col-12 col-sm-12 col-md-6 col-lg-4 py-3"
                >
                  <div className="d-flex flex-column news-card p-3">
                    <img
                      src={i.urlToImage}
                      alt="image"
                      className="news-image img"
                    />
                    <h3 className="news-title">{i.title}</h3>
                    <p className="news-description">{i.description}</p>
                    <p className="news-content">{i.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Science;
