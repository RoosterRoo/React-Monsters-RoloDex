import { Component } from 'react';
import './card-styles.css';

class Card extends Component {
    render() {
        const {monster} = this.props;
        return (
            <div class="card-container" key={monster.id}>
                <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2`}/>
                <h1>{monster.name}</h1>
                <p>{monster.email}</p>
            </div>
        );
        
    }
}

export default Card;