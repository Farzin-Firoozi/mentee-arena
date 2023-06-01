export default function Card({ results }) {
  let display;

  if (results) {
    display = results.map((character) => {
      let { id, image, name, status, location } = character;
  
      return (
        <div
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
          <div className="card d-flex flex-column justify-content-center">
            <img className="img img-fluid" src={image} alt="" />
            <div className="content">
              <div className="fs-5 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6 fw-normal">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          <button className="bookmark-btn position-absolute">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
          </button>
          {
            (() => {
              if (status === "Dead") {
                return (
                  <div className="badge position-absolute badge bg-danger">
                    {status}
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div className="badge position-absolute badge bg-success">
                    {status}
                  </div>
                );
              } else {
                return (
                  <div
                    className="badge position-absolute badge bg-secondary"
                  >
                    {status}
                  </div>
                );
              }
            })()
          }
        </div>
      );
    });
  } else {
    display = "No Characters Found </3";
  }

  return (
    <>
      {display}
    </>
  );
}
