const GetUnics = (list, filtro) => {
  const listaSinRepetir = [];
  const lista = [];
  let index = 0;
  if (filtro == 'items' || filtro == 'strategy') {
    const lis = list.map((enemy) => enemy[filtro]);
    lis.forEach((filtro) => {
      for (const key in filtro) {
        lista.push(...filtro[key]);
      }
    });
  } else {
    list
      .map((enemy) => enemy[filtro])
      .forEach((cosa) => {
        lista.push(...cosa);
      });
  }

  lista.sort();
  lista.forEach((element) => {
    index++;
    if (element !== lista[index]) {
      listaSinRepetir.push(element);
    }
  });
  return listaSinRepetir;
};
export default GetUnics;
