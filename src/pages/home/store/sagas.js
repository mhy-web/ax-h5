import { takeEvery, put } from 'redux-saga/effects';
import actionTypes from './actionTypes';
import axios from "axios";
import { initHomePageAction } from './actionCreators';

function* getHomeData() {
    try {
        const resp = yield axios.get('/api/home_data');
        const action = initHomePageAction(resp.data);
        yield put (action);
    } catch (e) {
        console.log(e);
    }
}

function* homePageSaga() {
    yield takeEvery(actionTypes.GET_HOME_DATA, getHomeData)
}

export default homePageSaga;
