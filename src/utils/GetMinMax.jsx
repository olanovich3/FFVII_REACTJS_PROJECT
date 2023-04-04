/* const mock = {
  id: 2,
  name: '2-Faced',
  level: 18,
  atributes: { HP: 330, MP: 80 },
  earned: { exp: 100, AP: 10, gil: 156 },
  items: {
    drop: ['Hi-Potion'],
    morph: ['None'],
    steal: ['Phoenix down'],
  },
  strategy: {
    weakness: ['None'],
    immune: ['Earth'],
    absorbs: ['None'],
  },
  enemy_skill: ['None'],
  location: ['Corel prison'],
  img: 'https://res.cloudinary.com/di0zpa5yw/image/upload/v1674826133/ff7_enemies/2faced_d357qm.png',
};
 */
const GetMinMax = (list, filter) => {
  const minMax = [];
  if (filter.length == 1) {
    const lista = list.map((enemy) => enemy[filter[0]]).sort((a, b) => a - b);
    minMax.push(lista[0]);
    minMax.push(lista[lista.length - 1]);
  } else {
    const lista = list.map((enemy) => enemy[filter[0]][filter[1]]).sort((a, b) => a - b);
    minMax.push(lista[0]);
    minMax.push(lista[lista.length - 1]);
  }
  return minMax;
};
export default GetMinMax;
