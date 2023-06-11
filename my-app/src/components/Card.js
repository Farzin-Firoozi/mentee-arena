
export default function Card({ results }) {

  let display;

  console.log(results);

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
          {
            (() => {
              if (status === "Dead") {
                return (
                  <div className="spoiler badge position-absolute badge d-flex justify-content-center align-items-center">
                    <p className="badge-text">{status}</p>
                    <p className="spoiler-text">Spoiler</p>
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div className="spoiler badge position-absolute badge d-flex justify-content-center align-items-center">
                    <p className="badge-text">{status}</p>
                    <p className="spoiler-text">Spoiler</p>
                  </div>
                );
              } else {
                return (
                  <div className="spoiler badge position-absolute badge d-flex justify-content-center align-items-center">
                    <p className="badge-text">{status}</p>
                    <p className="spoiler-text">Spoiler</p>
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
