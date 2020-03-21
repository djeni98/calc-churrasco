const id_c = 'q_carnivoros';
const id_v = 'q_vegetarianos';
const id_h = 'q_horas';

function adiciona(id) {
    let item = document.getElementById(id);
    const valor = parseInt(item.innerHTML);
    item.innerHTML = valor + 1;
    calcula();
}

function diminui(id) {
    let item = document.getElementById(id);
    const valor = parseInt(item.innerHTML);
    item.innerHTML = valor > 0 ? valor - 1 : 0;
    calcula();
}

function calcula() {
    const carni = parseInt(document.getElementById(id_c).innerHTML);
    const veget = parseInt(document.getElementById(id_v).innerHTML);
    const horas = parseInt(document.getElementById(id_h).innerHTML);

    const carne = carni * 50 * horas;
    const cerveja = (carni + veget) * horas;
    const refriML = (carni + veget) * horas * 100;
    const vegetais = ((carni * 50) + (veget * 100)) * horas;

    document.getElementById('t_carne').innerHTML = `${carne} g`;
    document.getElementById('t_cerveja').innerHTML = `${cerveja} latas`;
    document.getElementById('t_refri').innerHTML = `${refriML} ml`;
    document.getElementById('t_vegetais').innerHTML = `${vegetais} g`;
}
