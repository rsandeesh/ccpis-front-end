import React from 'react';

const BoundingBox = ({ x, y, height, width, imageUrl }) => {
    return (
        <div
            style={{
                position: 'absolute',
                left: x,
                top: y,
                height: height,
                width: width,
                border: '2px solid red',
            }}
        >
            <img
                src={imageUrl}
                alt="Bounding box image"
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
        </div>
    );
};

export default BoundingBox;