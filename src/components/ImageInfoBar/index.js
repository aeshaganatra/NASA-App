import React from 'react';
import Button from '../Button';
import { Wrapper, Content } from "./ImageInfoBar.style";

const ImageInfoBar = ({ date, copyright, hdurl, toggleFav, favMessage }) => (
  <Wrapper>
    <Content>
      <div className='column'>
        <p> date: {date}</p>
      </div>
      {
        !copyright ? null :
          <div className='column'>
            <p>copyright: {copyright}</p>
          </div>
      }
      <div className='column'>
        <Button
          text={'copy HD-URL'}
          callback={() => { navigator.clipboard.writeText(hdurl) }}
          styleButton={true}
        />
      </div>
      <div className='column'>
        <Button
          text={favMessage}
          callback={toggleFav}
          styleButton={true}
        />
      </div>
    </Content>
  </Wrapper >
);

export default ImageInfoBar;
