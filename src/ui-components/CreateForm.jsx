import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { PageContext } from '../context/PageContext';

const CreateFormStyled = styled.div`
  background-color: none;
  display: flex;
  flex-direction: column;

  & .createform {
    display: flex;
    flex-direction: column;
  }
`;

const CreateForm = () => {
  const { setPage } = useContext(PageContext);
  const [enemies, setEnemies] = useState([]);
  const [loaded, setloaded] = useState(false);
  const [locationInput, setLocationInput] = useState([]);
  const [newEnemy, setNewEnemy] = useState({
    img: '',
    name: '',
    level: '',
    atributes: '',
    earned: '',
    items: '',
    strategy: '',
    enemy_skill: '',
    location: [],
  });
  const [error, setError] = useState();

  const getEnemies = async () => {
    const res = await fetch('https://63f9da57beec322c57e8bc1d.mockapi.io/prueba');
    const data = await res.json();
    setEnemies(data);
    setloaded(true);
  };

  const createEnemies = (ev) => {
    ev.preventDefault();
    if (!newEnemy.img) {
      setError('Formulario imcompleto');
    } else {
      setError(null);
      fetch('https://63f9da57beec322c57e8bc1d.mockapi.io/prueba', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newEnemy),
      }).then(() => {
        getEnemies();
      });
    }
  };
  useEffect(() => {
    setPage('data');
    getEnemies();
  }, []);

  return (
    <CreateFormStyled className="Api">
      {loaded ? (
        enemies.map((enemy) => <div className="enemycard" key={enemy.id}></div>)
      ) : (
        <h2>Loading...</h2>
      )}
      <h2>CREATE ENEMY</h2>
      <form className="createform" onSubmit={(ev) => createEnemies(ev)}>
        <input
          type="text"
          placeholder="Imagen URL"
          onChange={(ev) => setNewEnemy({ ...newEnemy, img: ev.target.value })}
        />
        <input
          type="text"
          placeholder="name"
          onChange={(ev) => setNewEnemy({ ...newEnemy, name: ev.target.value })}
        />
        <input
          type="number"
          placeholder="level"
          onChange={(ev) => setNewEnemy({ ...newEnemy, level: ev.target.value })}
        />
        <input
          type="number"
          placeholder="HP"
          onChange={(ev) =>
            setNewEnemy({
              ...newEnemy,
              atributes: { ...newEnemy.atributes, HP: ev.target.value },
            })
          }
        />
        <input
          type="number"
          placeholder="MP"
          onChange={(ev) =>
            setNewEnemy({
              ...newEnemy,
              atributes: { ...newEnemy.atributes, MP: ev.target.value },
            })
          }
        />
        <input
          type="number"
          placeholder="exp"
          onChange={(ev) =>
            setNewEnemy({
              ...newEnemy,
              earned: { ...newEnemy.earned, exp: ev.target.value },
            })
          }
        />
        <input
          type="number"
          placeholder="AP"
          onChange={(ev) =>
            setNewEnemy({
              ...newEnemy,
              earned: { ...newEnemy.earned, AP: ev.target.value },
            })
          }
        />
        <input
          type="number"
          placeholder="gil"
          onChange={(ev) =>
            setNewEnemy({
              ...newEnemy,
              earned: { ...newEnemy.earned, gil: ev.target.value },
            })
          }
        />
        <input
          type="text"
          placeholder="drop"
          onChange={(ev) =>
            setNewEnemy({
              ...newEnemy,
              items: { ...newEnemy.items, drop: ev.target.value },
            })
          }
        />
        <input
          type="text"
          placeholder="morph"
          onChange={(ev) =>
            setNewEnemy({
              ...newEnemy,
              items: { ...newEnemy.items, morph: ev.target.value },
            })
          }
        />
        <input
          type="text"
          placeholder="steal"
          onChange={(ev) =>
            setNewEnemy({
              ...newEnemy,
              items: { ...newEnemy.items, steal: ev.target.value },
            })
          }
        />
        <input
          type="text"
          placeholder="Weakness"
          onChange={(ev) =>
            setNewEnemy({
              ...newEnemy,
              strategy: { ...newEnemy.strategy, weakness: ev.target.value },
            })
          }
        />
        <input
          type="text"
          placeholder="Immune"
          onChange={(ev) =>
            setNewEnemy({
              ...newEnemy,
              strategy: { ...newEnemy.strategy, immune: ev.target.value },
            })
          }
        />
        <input
          type="text"
          placeholder="Absorbs"
          onChange={(ev) =>
            setNewEnemy({
              ...newEnemy,
              strategy: { ...newEnemy.strategy, absorbs: ev.target.value },
            })
          }
        />
        <input
          type="text"
          placeholder="Enemy Skill"
          onChange={(ev) => setNewEnemy({ ...newEnemy, enemy_skill: ev.target.value })}
        />
        <input type="text" placeholder="Location" />
        <button
          type="button"
          onClick={(ev) => {
            setLocationInput([...locationInput, ev.target.previousSibling.value]);
            const updateInput = [...locationInput, ev.target.previousSibling.value];
            setNewEnemy({ ...newEnemy, location: updateInput });
          }}
        >
          add Location
        </button>
        <button type="submit">Create Enemy</button>
      </form>
      {error && <h3>{error}</h3>}
    </CreateFormStyled>
  );
};

export default CreateForm;
