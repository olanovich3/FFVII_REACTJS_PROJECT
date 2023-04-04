import { useState } from 'react';
import styled from 'styled-components';

const EnemyCardStyled = styled.div`
  & .hidden {
    display: none !important;
  }
  & .enemycard {
    color: whitesmoke;
    position: relative;
    border: solid 1px white;
    border-radius: 10px;
    box-shadow: 0 0 15px;
    background-color: #466e85;
    width: 200px;
  }
  & .enemycard > img {
    position: relative;
    left: 25px;
  }
  & .enemycard > h3 {
    display: flex;
    justify-content: center;
  }
  & .enemycard > button {
    position: relative;
    left: 55px;
    border-radius: 5px;
  }
  & .modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
  }
  & .modal-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 40%;
    padding: 2rem;
    gap: 2rem;
    border-radius: 10px;
    border: 2px solid #163435;
    background-image: url('https://res.cloudinary.com/di0zpa5yw/image/upload/v1677453379/ff7/Cloud-Finishing-Touch-1_xwvodj.png');
    background-size: cover;
    background-position: center;
    background-color: #0000008d;
  }
  & .modal-container > button {
    width: 50px;
  }
  & .divmodalflex {
    color: whitesmoke;
    display: flex;
    padding: 0.6rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: #000000dd;
    border: 2px solid #33d6c9;
    border-radius: 5px;
  }
  & .imgmodalDiv {
    justify-content: flex-start;
    gap: 3rem;
  }
`;

const EnemyCard = ({ enemy }) => {
  const [modal, setModal] = useState(false);

  return (
    <EnemyCardStyled>
      <div className="enemy">
        <div className="enemycard" key={enemy.id}>
          <img src={enemy.img} alt={enemy.name} />
          <h3>{enemy.name}</h3>
          <button
            onClick={() => {
              setModal(!modal);
            }}
          >
            Caracterisiticas
          </button>
        </div>

        <div className={modal ? 'modal' : 'hidden'}>
          <div className="modal-container">
            <h2>{enemy.name}</h2>
            <div className="divmodalflex imgmodalDiv">
              <img src={enemy.img} alt={`${enemy.name} pic`} />
              <div>
                <h4>Level: {enemy.level}</h4>
                <h4>HP: {enemy.atributes.HP}</h4>
                <h4>MP: {enemy.atributes.MP}</h4>
              </div>
            </div>
            <div className="divmodalflex">
              <div>
                <h4>Exp: {enemy.earned.exp}</h4>
                <h4>Ap: {enemy.earned.AP}</h4>
                <h4>Gil: {enemy.earned.gil}</h4>
              </div>
              <div>
                <h4>Drop: {enemy.items.drop}</h4>
                <h4>Morph: {enemy.items.morph}</h4>
                <h4>Steal: {enemy.items.steal}</h4>
              </div>
              <div>
                <h4>Weakness: {enemy.strategy.weakness}</h4>
                <h4>Immune: {enemy.strategy.inmune}</h4>
                <h4>Absorbs: {enemy.strategy.absorbs}</h4>
              </div>
            </div>
            <div className="divmodalflex">
              <h4>Enemy Skills: {enemy.enemy_skill}</h4>
              <h4>Location: {enemy.location}</h4>
            </div>
            <button
              onClick={() => {
                setModal(!modal);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </EnemyCardStyled>
  );
};

export default EnemyCard;
