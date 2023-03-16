// Import the Cloudinary class.
import {Cloudinary} from "@cloudinary/url-gen";
// const { Cloudinary } = require('@cloudinary/url-gen');

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'di4jj6chw'
  }
});

// Import any actions required for transformations.
import {fill} from "@cloudinary/url-gen/actions/resize";
// const { fill } = require('@cloudinary/url-gen/actions/resize');

// Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
const myImage = cld.image('docs/models'); 

// Resize to 250 x 250 pixels using the 'fill' crop mode.
myImage.resize(fill().width(250).height(250));

// Render the image in an 'img' element.
const imgElement = document.createElement('img');
document.body.appendChild(imgElement);
imgElement.src = myImage.toURL();

