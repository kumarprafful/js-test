import React, {Component} from 'react';
import "./imageGal.css";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class Gallery extends Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      imgData: null,
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount(){
    this.setState({imgData:this.props.data});
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  renderFullImage (url){
    console.log("he");
    this.toggle();
    console.log(this.state.modal);
    return (
      <>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
      </Modal>
      </>
    );
  }


renderImages (){
  if (this.state.imgData) {
    return this.state.imgData.allPixabayPhoto.edges.map(img => {
      return (
        <span key={img.id} className="imageParent">
          <img src={img.node.previewURL} className="theimage" onClick={()=>{this.renderFullImage(img.node.largeImageURL)}} />
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

render(){
  return (
    <>

      <div>
      <Button color="danger" onClick={this.toggle}>s</Button>
      </div>
      {this.renderImages()}
    </>
    );
  };
}


export default Gallery;
