import ExecMembers from './../../contents/ExecBody';
import GeneralMembers from './../../contents/GeneralBody';
export default function getBosyData(key){
    if(key==="The Executive Secretariat"){
        return ExecMembers;
    }
    else if(key === "The General Council"){
        return GeneralMembers;
    }
}