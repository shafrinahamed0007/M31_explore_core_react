export default function Food({foodName, isEat}){
    if(isEat){
        return <p>I eat {foodName}</p>
    }else{
        return <p>I does not eat yet {foodName}</p>
    }

}