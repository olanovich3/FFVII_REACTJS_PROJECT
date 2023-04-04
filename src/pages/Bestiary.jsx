import { useContext, useEffect, useState } from 'react';

import MapModal from '../3dComponents/MapModal';
import { PageContext } from '../context/PageContext';
import Divflex from '../ui-components/Divflex';
import DivGrid from '../ui-components/DivGrid';
import EnemyCard from '../ui-components/EnemyCard';
import InputData from '../ui-components/InputData';
import MinMaxFilter from '../ui-components/MinMaxFilter';
import FilterFunction from '../utils/FilterFunction';
import GetMinMax from '../utils/GetMinMax';
import GetUnics from '../utils/GetUnics';
import mock from '../utils/Mock';
/* const object = {
    name: '',
    level: [0, 100],
    HP: [0, 100],
    MP: [0, 100],
    exp: [0, 100],
    AP: [0, 100],
    gil: [0, 100],
    items: [],
    strategy: [],
    enemy_skill: [],
    location: [],
  }; */
const Bestiary = () => {
  const [enemies, setEnemies] = useState([]);
  let list = [];
  const getEnemies = async () => {
    const res = await fetch('https://63f26f29f28929a9df5a9085.mockapi.io/enemies');
    const data = await res.json();
    setEnemies(data);
    list = data;
  };

  useEffect(() => {
    getEnemies();
  }, []);

  const { setPage } = useContext(PageContext);
  useEffect(() => {
    setPage('bestiary');
  }, []);
  const handleChange = (ev) => {
    let min = 0;
    let max = 0;
    if (ev.currentTarget.className == 'maxInput') {
      min = ev.currentTarget.nextSibling.value;
      max = ev.currentTarget.value;
    } else {
      max = ev.currentTarget.previousSibling.value;
      min = ev.currentTarget.value;
    }
    return [min, max];
  };
  list = mock;
  const items = GetUnics(list, 'items');
  const strategy = GetUnics(list, 'strategy');
  const enemy_skill = GetUnics(list, 'enemy_skill');
  const location = GetUnics(list, 'location');
  const minMaxLevelValues = GetMinMax(list, ['level']);
  const minMaxHPValues = GetMinMax(list, ['atributes', 'HP']);
  const minMaxMPValues = GetMinMax(list, ['atributes', 'MP']);
  const minMaxExpValues = GetMinMax(list, ['earned', 'exp']);
  const minMaxAPValues = GetMinMax(list, ['earned', 'AP']);
  const minMaxGilValues = GetMinMax(list, ['earned', 'gil']);
  const maxMaxLevel = minMaxLevelValues[1];
  const minMinLevel = minMaxLevelValues[0];
  const maxMaxHP = minMaxHPValues[1];
  const minMinHP = minMaxHPValues[0];
  const maxMaxMP = minMaxMPValues[1];
  const minMinMP = minMaxMPValues[0];
  const maxMaxExp = minMaxExpValues[1];
  const minMinExp = minMaxExpValues[0];
  const maxMaxAP = minMaxAPValues[1];
  const minMinAP = minMaxAPValues[0];
  const maxMaxGil = minMaxGilValues[1];
  const minMinGil = minMaxGilValues[0];
  const [minMaxLevel, setMinLevel] = useState(minMinLevel);
  const [maxMinLevel, setMaxLevel] = useState(maxMaxLevel);
  const [minMaxHP, setMinHP] = useState(minMinHP);
  const [maxMinHP, setMaxHP] = useState(maxMaxHP);
  const [minMaxMP, setMinMP] = useState(minMinMP);
  const [maxMinMP, setMaxMP] = useState(maxMaxMP);
  const [minMaxAP, setMinAP] = useState(minMinAP);
  const [maxMinAP, setMaxAP] = useState(maxMaxAP);
  const [minMaxExp, setMinExp] = useState(minMinExp);
  const [maxMinExp, setMaxExp] = useState(maxMaxExp);
  const [minMaxGil, setMinGil] = useState(minMinGil);
  const [maxMinGil, setMaxGil] = useState(maxMaxGil);
  const [newObject, setNewObject] = useState({
    name: '',
    level: [minMinLevel, maxMaxLevel],
    HP: [minMinHP, maxMaxHP],
    MP: [minMinMP, maxMaxMP],
    exp: [minMinExp, maxMaxExp],
    AP: [minMinAP, maxMaxAP],
    gil: [minMinGil, maxMaxGil],
    items: [],
    strategy: [],
    enemy_skill: [],
    location: [],
  });
  const [map, setMap] = useState(false);
  const [filtersArray, setFilterArray] = useState([]);
  return (
    <div className="BestiaryLayoutDiv">
      <div className="NavOfFilters">
        {map == false && (
          <button
            className="openMap"
            onClick={() => {
              setMap(!map);
            }}
          >
            Map
          </button>
        )}
        {map && (
          <button
            className="openMap"
            onClick={() => {
              setMap(!map);
            }}
          >
            Close
          </button>
        )}
        {map && <MapModal />}
        <div>
          <Divflex padding={'1rem 4rem'} align={'flex-end'} direction={'column'}>
            <h4>Search by name</h4>
            <InputData
              color={'whitesmoke'}
              width={'110%'}
              type={'text'}
              placeholder={name}
              onChange={(ev) => {
                setNewObject({ ...newObject, name: ev.target.value });
                const actulizedObject = { ...newObject, name: ev.target.value };
                setEnemies(FilterFunction(list, actulizedObject));
              }}
            />
          </Divflex>
          <div>
            <h4 className="headingMinMax">Level</h4>
            <MinMaxFilter
              action={(ev) => {
                const minmax = handleChange(ev);
                setMinLevel(minmax[0]);
                setMaxLevel(minmax[1]);
                setNewObject({ ...newObject, level: [minmax[0], minmax[1]] });
                const actulizedObject = { ...newObject, level: [minmax[0], minmax[1]] };
                setEnemies(FilterFunction(list, actulizedObject));
              }}
              minMin={minMinLevel}
              maxMin={maxMinLevel}
              minMax={minMaxLevel}
              maxMax={maxMaxLevel}
            />
            <h4 className="headingMinMax">HP</h4>
            <MinMaxFilter
              action={(ev) => {
                const minmax = handleChange(ev);
                setMinHP(minmax[0]);
                setMaxHP(minmax[1]);
                setNewObject({ ...newObject, HP: [minmax[0], minmax[1]] });
                const actulizedObject = { ...newObject, HP: [minmax[0], minmax[1]] };
                setEnemies(FilterFunction(list, actulizedObject));
              }}
              minMin={minMinHP}
              maxMin={maxMinHP}
              minMax={minMaxHP}
              maxMax={maxMaxHP}
            />
            <h4 className="headingMinMax">MP</h4>
            <MinMaxFilter
              action={(ev) => {
                const minmax = handleChange(ev);
                setMinMP(minmax[0]);
                setMaxMP(minmax[1]);
                setNewObject({ ...newObject, MP: [minmax[0], minmax[1]] });
                const actulizedObject = { ...newObject, MP: [minmax[0], minmax[1]] };
                setEnemies(FilterFunction(list, actulizedObject));
              }}
              minMin={minMinMP}
              maxMin={maxMinMP}
              minMax={minMaxMP}
              maxMax={maxMaxMP}
            />
            <h4 className="headingMinMax">exp</h4>
            <MinMaxFilter
              action={(ev) => {
                const minmax = handleChange(ev);
                setMinExp(minmax[0]);
                setMaxExp(minmax[1]);
                setNewObject({ ...newObject, exp: [minmax[0], minmax[1]] });
                const actulizedObject = { ...newObject, exp: [minmax[0], minmax[1]] };
                setEnemies(FilterFunction(list, actulizedObject));
              }}
              minMin={minMinExp}
              maxMin={maxMinExp}
              minMax={minMaxExp}
              maxMax={maxMaxExp}
            />
            <h4 className="headingMinMax">AP</h4>
            <MinMaxFilter
              action={(ev) => {
                const minmax = handleChange(ev);
                setMinAP(minmax[0]);
                setMaxAP(minmax[1]);
                setNewObject({ ...newObject, AP: [minmax[0], minmax[1]] });
                const actulizedObject = { ...newObject, AP: [minmax[0], minmax[1]] };
                setEnemies(FilterFunction(list, actulizedObject));
              }}
              minMin={minMinAP}
              maxMin={maxMinAP}
              minMax={minMaxAP}
              maxMax={maxMaxAP}
            />
            <h4 className="headingMinMax">Gil</h4>
            <MinMaxFilter
              action={(ev) => {
                const minmax = handleChange(ev);
                setMinGil(minmax[0]);
                setMaxGil(minmax[1]);
                setNewObject({ ...newObject, gil: [minmax[0], minmax[1]] });
                const actulizedObject = { ...newObject, gil: [minmax[0], minmax[1]] };
                setEnemies(FilterFunction(list, actulizedObject));
              }}
              minMin={minMinGil}
              maxMin={maxMinGil}
              minMax={minMaxGil}
              maxMax={maxMaxGil}
            />
          </div>
          <div className="filtersdiv">
            {filtersArray.map((filter) => (
              <div key={filter} className="filterBox">
                <h4>{filter}</h4>
                <button
                  onClick={(ev) => {
                    const removedFilter = [];
                    const value = ev.currentTarget.previousSibling.firstChild.nodeValue;
                    filtersArray.forEach((filter) => {
                      if (filter != value) {
                        removedFilter.push(filter);
                      }
                    });
                    setFilterArray([...removedFilter]);
                    const removedItems = [];
                    const removedStrategy = [];
                    const removedES = [];
                    const removedLocation = [];
                    newObject.items.forEach((item) => {
                      if (item != value) {
                        removedItems.push(item);
                      }
                    });
                    newObject.strategy.forEach((item) => {
                      if (item != value) {
                        removedStrategy.push(item);
                      }
                    });
                    newObject.enemy_skill.forEach((item) => {
                      if (item != value) {
                        removedES.push(item);
                      }
                    });
                    newObject.location.forEach((item) => {
                      if (item != value) {
                        removedLocation.push(item);
                      }
                    });
                    const actulizedObject = {
                      ...newObject,
                      items: removedItems,
                      enemy_skill: removedES,
                      location: removedLocation,
                      strategy: removedStrategy,
                    };
                    setNewObject({
                      ...newObject,
                      items: removedItems,
                      enemy_skill: removedES,
                      location: removedLocation,
                      strategy: removedStrategy,
                    });
                    setEnemies(FilterFunction(list, actulizedObject));
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <div>
            <Divflex gap={'1.5rem'}>
              <h4 className="headingMinMax">Items</h4>
              <div className="filtersDivsBestiary">
                {items.map((item) =>
                  item != 'None' ? (
                    <Divflex gap={'0.8rem'} key={item}>
                      <input
                        type="checkbox"
                        id={item}
                        checked={
                          filtersArray.filter((filt) => filt == item).length == 0
                            ? false
                            : true
                        }
                        onChange={(ev) => {
                          if (ev.target.checked) {
                            const actulizedObject = {
                              ...newObject,
                              items: [...newObject.items, ev.target.id],
                            };
                            setNewObject({
                              ...newObject,
                              items: [...newObject.items, ev.target.id],
                            });
                            setEnemies(FilterFunction(list, actulizedObject));
                            setFilterArray([...filtersArray, ev.target.id]);
                          } else {
                            const removed = [];
                            newObject.items.forEach((item) => {
                              if (item != ev.target.id) {
                                removed.push(item);
                              }
                            });
                            const actulizedObject = {
                              ...newObject,
                              items: removed,
                            };
                            setNewObject({
                              ...newObject,
                              items: removed,
                            });
                            setEnemies(FilterFunction(list, actulizedObject));
                            const removedFilter = [];
                            filtersArray.forEach((filter) => {
                              if (filter != ev.target.id) {
                                removedFilter.push(filter);
                              }
                            });
                            setFilterArray([...removedFilter]);
                          }
                        }}
                      />
                      <h4>{item}</h4>
                    </Divflex>
                  ) : (
                    <div key={item}></div>
                  ),
                )}
              </div>
              <h4 className="headingMinMax">Strategy</h4>
              <div className="filtersDivsBestiary">
                {strategy.map((item) =>
                  item != 'None' ? (
                    <Divflex key={item}>
                      <input
                        type="checkbox"
                        id={item}
                        checked={
                          filtersArray.filter((filt) => filt == item).length == 0
                            ? false
                            : true
                        }
                        onChange={(ev) => {
                          if (ev.target.checked) {
                            const actulizedObject = {
                              ...newObject,
                              strategy: [...newObject.strategy, ev.target.id],
                            };
                            setNewObject({
                              ...newObject,
                              strategy: [...newObject.strategy, ev.target.id],
                            });
                            setEnemies(FilterFunction(list, actulizedObject));
                            setFilterArray([...filtersArray, ev.target.id]);
                          } else {
                            const removed = [];
                            newObject.strategy.forEach((item) => {
                              if (item != ev.target.id) {
                                removed.push(item);
                              }
                            });
                            const actulizedObject = {
                              ...newObject,
                              strategy: removed,
                            };
                            setNewObject({
                              ...newObject,
                              strategy: removed,
                            });
                            setEnemies(FilterFunction(list, actulizedObject));
                            const removedFilter = [];
                            filtersArray.forEach((filter) => {
                              if (filter != ev.target.id) {
                                removedFilter.push(filter);
                              }
                            });
                            setFilterArray([...removedFilter]);
                          }
                        }}
                      />
                      <h4>{item}</h4>
                    </Divflex>
                  ) : (
                    <div key={item}></div>
                  ),
                )}
              </div>
              <h4 className="headingMinMax">Enemy Skill</h4>
              <div className="filtersDivsBestiary">
                {enemy_skill.map((item) =>
                  item != 'None' ? (
                    <Divflex key={item}>
                      <input
                        type="checkbox"
                        id={item}
                        checked={
                          filtersArray.filter((filt) => filt == item).length == 0
                            ? false
                            : true
                        }
                        onChange={(ev) => {
                          if (ev.target.checked) {
                            const actulizedObject = {
                              ...newObject,
                              enemy_skill: [...newObject.enemy_skill, ev.target.id],
                            };
                            setNewObject({
                              ...newObject,
                              enemy_skill: [...newObject.enemy_skill, ev.target.id],
                            });
                            setEnemies(FilterFunction(list, actulizedObject));
                            setFilterArray([...filtersArray, ev.target.id]);
                          } else {
                            const removed = [];
                            newObject.enemy_skill.forEach((item) => {
                              if (item != ev.target.id) {
                                removed.push(item);
                              }
                            });
                            const actulizedObject = {
                              ...newObject,
                              enemy_skill: removed,
                            };
                            setNewObject({
                              ...newObject,
                              enemy_skill: removed,
                            });
                            setEnemies(FilterFunction(list, actulizedObject));
                            const removedFilter = [];
                            filtersArray.forEach((filter) => {
                              if (filter != ev.target.id) {
                                removedFilter.push(filter);
                              }
                            });
                            setFilterArray([...removedFilter]);
                          }
                        }}
                      />
                      <h4>{item}</h4>
                    </Divflex>
                  ) : (
                    <div key={item}></div>
                  ),
                )}
              </div>
              <h4 className="headingMinMax">Locations</h4>
              <div className="filtersDivsBestiary">
                {location.map((item) => (
                  <Divflex key={item} width={'max-content'}>
                    <input
                      type="checkbox"
                      id={item}
                      checked={
                        filtersArray.filter((filt) => filt == item).length == 0
                          ? false
                          : true
                      }
                      onChange={(ev) => {
                        if (ev.target.checked) {
                          const actulizedObject = {
                            ...newObject,
                            location: [...newObject.location, ev.target.id],
                          };
                          setNewObject({
                            ...newObject,
                            location: [...newObject.location, ev.target.id],
                          });
                          setEnemies(FilterFunction(list, actulizedObject));
                          setFilterArray([...filtersArray, ev.target.id]);
                        } else {
                          const removed = [];
                          newObject.location.forEach((item) => {
                            if (item != ev.target.id) {
                              removed.push(item);
                            }
                          });
                          const actulizedObject = {
                            ...newObject,
                            location: [...removed],
                          };
                          setNewObject({
                            ...newObject,
                            location: [...removed],
                          });
                          setEnemies(FilterFunction(list, actulizedObject));
                          const removedFilter = [];
                          filtersArray.forEach((filter) => {
                            if (filter != ev.target.id) {
                              removedFilter.push(filter);
                            }
                          });
                          setFilterArray([...removedFilter]);
                        }
                      }}
                    />
                    <h4>{item}</h4>
                  </Divflex>
                ))}
              </div>
            </Divflex>
          </div>
        </div>
      </div>
      <div className="enemiesDivBestiary">
        <DivGrid
          gap={'2rem'}
          cols={'260px 260px 260px 260px'}
          padding={'4rem 1rem'}
          variant={'rgba(0, 0, 0, 0.274)'}
        >
          {enemies.map((enemy) => (
            <EnemyCard enemy={enemy} key={enemy.id} />
          ))}
        </DivGrid>
      </div>
    </div>
  );
};
export default Bestiary;
