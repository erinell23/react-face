export const _flot = (num, round = 2) =>{
    if(!_isEmpty(num)) return parseFloat(num).toFixed(round);
    return (0).toFixed(round);
}
export const _Integer = (num , local = false) =>{
    const integer = parseInt(num);
    if(!_isEmpty(integer)){
        if(local){
            return integer.toLocaleString('en-ES' , {minimumFractionDigits: 0 });
        }
        return integer;
    }
    return 0;
}
export const _isEmpty = (valor) => {
    if(!valor || valor.toString().trim() === "" || (typeof valor === 'object' && Object.keys(valor).length === 0)){
        return true;
    }
    return false;
}
export const _be = (_val) =>{
    if(_isEmpty(_val)) return '';
    return _val
}
export const _date = (date, local = false) => {
    const d = new Date(date);
    if(_isEmpty(d.valueOf())) return '';
    if(local) return d.toLocaleDateString('en-GB');
    return d;
}
export const _capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}