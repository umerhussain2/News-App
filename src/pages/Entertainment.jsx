import { useNews } from "../context/Context";
import "./css/Home.css";

const Entertainment = () => {
  const x = useNews();
  return (
    <>
      {!x.entertainment ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <div className="container-fluid py-5">
            <div className="row">
              {x.entertainment?.map((i, ind) => (
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
            <div className="top-button">
              <a href="#">TOP</a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Entertainment;
