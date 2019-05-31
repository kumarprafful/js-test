import React, {useState} from 'react';
import "./imageGal.css";

export default (props) => {
  const [allImages, setAllImages] = useState(props.data.allPixabayPhoto.edges);
  const [selectedImg, setSelectedImg] = useState(allImages[0].node.largeImageURL);
  console.log(selectedImg);
  // console.log(allImages[0].node.largeImageURL);

  const renderFullImage = (url) => {
    setSelectedImg(url);
    console.log(selectedImg);
  }

  const renderImages = () => {
    if (allImages) {
      return allImages.map(img => {
        // console.log(img);
        return (
          <span key={img.id} className="imageParent">
              <img alt={img.node.previewURL} src={img.node.previewURL} className="theimage" onClick={()=>{renderFullImage(img.node.largeImageURL)}} />
          </span>
        );
      })
    }
    else {
      return(
      <h1>Loading...</h1>
    );
    }
  }


  return (
  <>
    <div className="max_size" style={{textAlign:'center'}}>
      <div className="imageParent">
        <img alt={selectedImg} src={selectedImg} style={{height:'27em'}} />
      </div>
      <div className="thumbnails">
        {renderImages()}
      </div>
    </div>
  </>
  );
}
