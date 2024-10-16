import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './Components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
 
    const albumList=[{
        id:1,name:'tranlaluot', thumbnailUrl:'https://avatar-ex-swe.nixcdn.com/playlist/2024/09/10/q/F/6/B/1725961409800_300.jpg'
    },{
        id:2,name:'nhac hoa', thumbnailUrl:'https://avatar-ex-swe.nixcdn.com/playlist/2024/09/23/1/a/4/4/1727063466231_300.jpg'
    },{
        id:3,name:'trinh', thumbnailUrl:'https://avatar-ex-swe.nixcdn.com/playlist/2024/09/10/q/F/6/B/1725961409800_300.jpg'
    }
]
    return (
        <div>
           
           <h2>Co the ban se thich day</h2>
           <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature ;