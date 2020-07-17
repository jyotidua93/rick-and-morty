import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from './Spinner';

const Characters = ({ characters, loading }) => {
      if(loading){
          return <Spinner />
      } else {
        return (
            <div className="characters">
                {characters.map((character,index) => (
                    <CharacterItem key={index} character={character} />
                ))}                
            </div>
            );
      }
    
}

export default Characters;