import CompleteData from './../../contents/societies';


export default function getClubData(key){
    
    for(let i=0; i<CompleteData.length; i++){
        let item = CompleteData[i];
        if(item.name === key){
            return item;   
        }
    }
    return null;
}