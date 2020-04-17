/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: vishnu <vishnu@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/31 11:10:32 by vishnu            #+#    #+#             */
/*   Updated: 2020/01/08 09:43:50 by vishnu           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSage from './../sagas';

const configStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        allReducers,
        compose(
            applyMiddleware(sagaMiddleware)
        ),
    );
    sagaMiddleware.run(rootSage);
    return store;
}

export default configStore;