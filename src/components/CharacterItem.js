import React from 'react';

const CharacterItem = ({ character })  => {
        let d1 = Date.now();
        let d2 = new Date(character.created).getTime();
        let date1 = new Date(d1);
        let date2 = new Date(d2);
        var diffYear =(date2.getTime() - date1.getTime()) / 1000;
        diffYear /= (60 * 60 * 24);
        var year_differnece = Math.abs(Math.round(diffYear/365.25));
    
        return (
            <div className="card-component__section">
                <div class="card_item">
                    <div className="card-component__content">
                        <div className="card-component__header">
                            <img src={character.image} alt={character.name} />
                            <div class="card-title">
                                <div className="card-header">{character.name}</div>
                                <div className="card-id">id: {character.id} - created {year_differnece} years ago</div>
                            </div>
                        </div>
                        <div className="card-component__details">
                            <div className="bottom-border">
                                <span>STATUS</span>
                                <label>{character.status}</label>
                            </div>
                            <div  className="bottom-border">
                                <span>SPECIES</span>
                                <label>{character.species}</label>
                            </div>
                            <div  className="bottom-border">
                                <span>GENDER</span>
                                <label>{character.gender}</label>
                            </div>
                            <div  className="bottom-border">
                                <span>ORIGIN</span>
                                <label>{character.origin.name}</label>
                            </div>
                            <div  className="bottom-border">
                                <span>LAST LOCATION</span>
                                <label>{character.location.name}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        );
    
}

export default CharacterItem;