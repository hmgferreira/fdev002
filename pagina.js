
// const conexao = new Conexao();
// const data = await conexao.query("SELECT count(id) as total FROM `usuarios`", {});

const total_registros = 19;
const total_por_pagina = 5;

let qtde_paginas = parseInt(total_registros / total_por_pagina);
let resto_divisao = total_registros % total_por_pagina;

if(resto_divisao > 0) {
    qtde_paginas++;
}

console.log(qtde_paginas);



