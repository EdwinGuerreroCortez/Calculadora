export const suma=(v1,v2)=>v1+v2;

export const resta=(v1,v2)=>v1-v2;

export const multiplicacion=(v1,v2)=>v1*v2;

export const division=(v1,v2)=>{
    if(v2==0)
        return "Division imposible";
    else
        return v1/v2;
}
var pi =3.141516;

const validar = ()=>{
    return "validacion";
}
export {suma,resta,multiplicacion,division,pi};
    