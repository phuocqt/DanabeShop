import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Album.propTypes = {};

const AlbumList = [
  {
    id: 1,
    title: 'Hot Hits Vietnam',
    img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/e/5/7/9/e57943e51b9e8be30eccd85956ae52af.jpg',
  },
  {
    id: 1,
    title: 'Hot Hits Vietnam',
    img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/f/d/3/0/fd303f58e16acee435800b32621b5b60.jpg',
  },
  {
    id: 2,
    title: 'Daily XONE',
    img: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/8/4/3/8/8438eee9ed95172a7ced2d699c297fc5.jpg',
  },
];

function Album(props) {
  return (
    <div>
      <ul className="album">
        {AlbumList.map((album) => {
          return (
            <li key={album.id}>
              {album.title}
              <img src={album.img} alt={album.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Album;
