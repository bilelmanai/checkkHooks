import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "./ItemCard.css";

const Add = ({ blocks, setBlocks }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newtitle, setNewtitle] = useState("");
  const [newposterURL, setnewposterURL] = useState("");
  const [newrating, setnewrating] = useState(0);
  const [newdescription, setnewdescription] = useState("");
  const buttonCliick = () => {
    const ewfilm = {
      title: newtitle,
      description: newdescription,
      posterURL: newposterURL,
      rating: newrating,
    };
    if (
      newtitle !== "" &&
      newposterURL !== "" &&
      newrating !== 0 &&
      newrating <= 10 &&
      newdescription !== ""
    ) {
      setBlocks([...blocks, ewfilm]);
      setShow(false);
    }
  };
  return (
    <div href="#1" className="contain blue">
      <div className="move-img mv">
        <button onClick={handleShow} className="plusimg">
          <FontAwesomeIcon icon={faPlusSquare} size="4x" />
        </button>
        <Modal
          size="lg"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header
            style={{ backgroundColor: "#373b69", borderRadius: "10px" }}
            closeButton
          >
            <h2 style={{ color: "white", textAlign: "center" }}>New Movie</h2>
          </Modal.Header>
          <div className="model">
            <div>
              <h2>Title </h2>
              <input
                type="text"
                onChange={(e) => setNewtitle(e.target.value)}
              />
            </div>
            <div>
              <h2>Rating </h2>
              <input
                type="text"
                onChange={(e) => setnewrating(e.target.value)}
              />
            </div>
            <div>
              <h2>PosterURL </h2>
              <input
                type="text"
                onChange={(e) => setnewposterURL(e.target.value)}
              />
            </div>
            <div>
              <h2>Description </h2>
              <textarea
                type="text"
                onChange={(e) => setnewdescription(e.target.value)}
              />
            </div>
          </div>
          <Modal.Footer
            style={{
              backgroundColor: "#373b69",
              borderTop: "#6610f2",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              style={{ backgroundColor: "#6610f2" }}
              onClick={buttonCliick}
            >
              ADD
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Add;
