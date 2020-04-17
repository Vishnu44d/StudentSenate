/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/31 11:10:17 by vishnu            #+#    #+#             */
/*   Updated: 2019/12/31 11:10:18 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import {combineReducers} from 'redux';

const componentReducer = (state=null, action) => {
    //console.log("COURSE REDUCER CALL ", action.type, " ", COURSE.LOAD_SUCCESS);
    if (action.type === "COMPONENT_CHANGE"){
        return action.component;
    }
    return state;
}

const allReducers = combineReducers({
    selectedComp: componentReducer,
})

export default allReducers;