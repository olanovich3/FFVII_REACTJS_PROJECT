const FilterFunction = (list, filter) => {
  const arrayObjectList = FilterObjectorArray(list, filter);
  const finalList = FilterNumberOrName(arrayObjectList, filter);
  return finalList;
};
export default FilterFunction;

const FilterNumberOrName = (list, filter) => {
  const listName = filter.name == '' ? list : filterName(list, filter.name);
  const listLevel =
    filter.level[0] == 0 && filter.level[1] == 100
      ? listName
      : FilterLevel(listName, filter.level);
  const listHP =
    filter.HP[0] == 0 && filter.HP[1] == 100
      ? listLevel
      : FilterNumbers(listLevel, ['atributes', 'HP'], filter.HP);
  const listMP =
    filter.MP[0] == 0 && filter.MP[1] == 100
      ? listHP
      : FilterNumbers(listHP, ['atributes', 'MP'], filter.MP);
  const listExp =
    filter.exp[0] == 0 && filter.exp[1] == 100
      ? listMP
      : FilterNumbers(listMP, ['earned', 'exp'], filter.exp);
  const listAP =
    filter.AP[0] == 0 && filter.AP[1] == 100
      ? listExp
      : FilterNumbers(listExp, ['earned', 'AP'], filter.AP);
  const listGil =
    filter.gil[0] == 0 && filter.gil[1] == 100
      ? listAP
      : FilterNumbers(listAP, ['earned', 'gil'], filter.gil);
  return listGil;
};
const FilterObjectorArray = (list, filter) => {
  const listItems = [];
  if (filter.items.length != 0) {
    filter.items.forEach((value) => {
      listItems.push(...FilterObjects(list, 'items', value));
    });
  }
  const listStrategy = [...listItems];
  if (filter.strategy.length != 0) {
    filter.strategy.forEach((value) => {
      listStrategy.push(...FilterObjects(list, 'strategy', value));
    });
  }
  const listEnemy_skill = [...listStrategy];
  if (filter.enemy_skill.length != 0) {
    filter.enemy_skill.forEach((value) => {
      listEnemy_skill.push(...FilterArrays(list, 'enemy_skill', value));
    });
  }
  const listLocation = [...listEnemy_skill];
  if (filter.location.length != 0) {
    filter.location.forEach((value) => {
      listLocation.push(...FilterArrays(list, 'location', value));
    });
  }
  return listLocation.length == 0 ? list : removeDuplicates(listLocation);
};

const filterName = (list, value) => {
  return list.filter((enemy) => enemy.name.toLowerCase().includes(value.toLowerCase()));
};
const FilterObjects = (list, key, value) => {
  const array = [];
  list.forEach((enemy) => {
    let match = 0;
    for (const keys in enemy[key]) {
      enemy[key][keys].forEach((val) => {
        if (val === value) {
          match = 1;
        }
      });
    }
    if (match === 1) {
      array.push(enemy);
    }
  });
  const lis = [];
  array.forEach((enemy) => {
    lis.push({ ...enemy, [key[0]]: true });
  });
  return lis;
};
const FilterArrays = (list, key, value) => {
  return list.filter((enemy) => value == enemy[key].find((val) => val === value));
};
const FilterNumbers = (list, keys, value) => {
  return list.filter(
    (enemy) => enemy[keys[0]][keys[1]] >= value[0] && enemy[keys[0]][keys[1]] <= value[1],
  );
};
const FilterLevel = (list, value) => {
  return list.filter((enemy) => enemy.level >= value[0] && enemy.level <= value[1]);
};
const removeDuplicates = (list) => {
  const idList = list.map((enemy) => enemy.id);
  idList.sort((a, b) => a - b);
  const noRepeatIds = [];
  const noRepeatEnemies = [];
  let index = 0;
  idList.forEach((id) => {
    index++;
    if (id !== idList[index]) {
      noRepeatIds.push(id);
    }
  });
  noRepeatIds.forEach((id) => {
    noRepeatEnemies.push(list.find((enemy) => enemy.id === id));
  });
  return noRepeatEnemies;
};
