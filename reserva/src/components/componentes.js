const ComponenteMultiple= ({opcion, dias})=>{
    
    const calcHotel=()=>{
        let coste=dias*50;
        if(dias>5) coste-=35;
        else if(dias>3) coste-=25;
        
        return<p>Coste Estancia: {coste}</p>
    }

    const calcCoche=()=>{
        let coste= dias*30;
        if(dias>7) coste-=15;
        else if(dias>3) coste-=3;
        
        return<p>Coste Vehiculo: {coste}</p>
    }

    return <div>{opcion===1 ? calcHotel(): opcion===2 ? calcCoche():""}</div>
}

export default ComponenteMultiple;