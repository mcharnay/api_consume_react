//imrc
import React, { Component } from 'react';

//import Image.js component
import Image from './Image';

//import Pagination.js component
import Pagination from './Pagination';


//cc
class ImageResult extends Component {
    showImages = () => {

        //calls images [], from app.js
        const images = this.props.images;

        if(images.length === 0) return null;

        console.log(images);

        return (
            <React.Fragment>

                <div className="col-12 p-5 row">
                    {images.map(image => (
                        <Image
                            key={image.id}
                            image={image}
                        />
                    ))}
                </div>

                <Pagination 
                    nextPage={this.props.nextPage}
                    prevPage={this.props.prevPage}
                />

            </React.Fragment>
        );
    }




    render() {
        return (
            <React.Fragment>
                { this.showImages() }
            </React.Fragment>
        );
    }
}

export default ImageResult;