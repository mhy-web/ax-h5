import { takeEvery, put } from 'redux-saga/effects';
import qs from 'querystring';
// import queryParse from '../utils/queryParse';
import constants from './actionTypes';
import axios from '../utils/axios';
import {
    initHomePageAction,
    initProjectListAction,
    initDetailAction,
    initActivityListPageAction,
    initActivityDetailAction,
    initPersonalPage,
    initMyApplyPage,
    initInvitePage
} from './actionCreators';

function * getHomeData() {
    try {
        // const query = queryParse(location.href);
        const query = {
            page_index: 1,
            page_size: 20
        };
        let resp = yield axios.get(`/index/info?${qs.stringify(query)}`);
        resp = resp.data;
        console.log('resp saga', resp.data);
        const action = initHomePageAction(resp.data);
        yield put(action);
    } catch (e) {
        console.log('request failed:', e);
        console.log('get data by require JSON file.......');
        // let homePageData = require('../../server/mook/home_data.json');
        // const action = initHomePageAction(homePageData.data);
        // yield put (action);
    }
}

function * fetchProList(action) {
    try {
        const query = { banner_limit: 5, company_limit: 3, page_index: 1, page_size: 20 };
        let resp = yield axios.get(`/project/list?${qs.stringify(query)}`);
        resp = resp.data;
        yield put(initProjectListAction(resp.list));
    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get list by require JSON file.......');
        // let data = require('../../server/mook/project_list.json');
        // data = data.list;
        // yield put(initProjectListAction(data));
    }
}

function * fetchProDetail(action) {
    try {
        const query = {
            pid: action.pid
        };
        let resp = yield axios.get(`/project/detail?${qs.stringify(query)}`);
        resp = resp.data;
        console.log('resp', resp);
        // const info = pid && resp.list.find(item => (item.id).toString() === pid);
        // yield put(initDetailAction(info));
        yield put(initDetailAction(resp.data));
    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get detail by require JSON file.......');

        // let data = require('../../server/mook/project_list.json');
        // let pid = (action.pid).toString();
        // data = data.list;
        // let info = pid && data.find(item => (item.id).toString() === pid);
        // yield put(initDetailAction(info));
    }
}

function * fetchActivityListData() {
    try {
        const query = {
            page_size: 10,
            page_index: 1
        }
        let resp = yield axios.get(`/activity/list?${qs.stringify(query)}`);
        resp = resp.data;
        yield put(initActivityListPageAction(resp.data));
    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get detail by require JSON file.......');

        // let data = require('../../server/mook/activity_info.json');
        // data = data.data;
        // yield put(initActivityListPageAction(data));
    }
}

function * fetchActivityDetailData(action) {
    try {
        const query = {
            aid: action.aid
        };
        let resp = yield axios.get(`/activity/detail?${qs.stringify(query)}`);
        resp = resp.data;
        console.log('resp', resp);
        // const result = aid && resp.data.find(item => (item.id).toString() === aid);
        // yield put(initActivityDetailAction(result));
        yield put(initActivityDetailAction(resp.data));
    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get detail by require JSON file.......');
        // let resp = require('../../server/mook/activity_info.json');
        // resp = resp.data
        // let aid = (action.aid).toString();
        // let result = aid && resp.find(item => (item.id).toString() === aid);
        // yield put(initActivityDetailAction(result));
    }
}

function * fetchPersonData() {
    try {
        let resp = yield axios.get(`/personal`);
        resp = resp.data;
        yield put(initPersonalPage(resp.data));
    } catch (e) {
        console.log('get project lsit data failed', e);
        console.log('get detail by require JSON file.......');

        // let data = require('../../server/mook/persional.json');
        // data = data.data;
        // yield put(initPersonalPage(data));
    }
}

function * putSubmitApply(action) {
    console.log('putSubmitApply', action);
    try {
        const data = action.data.toJS();
        const resp = yield axios.post(`/apply/submit`, {
            ...data
        });
        // resp = resp.data;
        console.log('resp', resp)
    } catch (e) {
        console.log('e', e);
        console.log('you had submit you apply request, but faile');
    }
}

function * fetchApplyList() {
    try {
        let resp = yield axios.get(`/apply/list`);
        resp = resp.data;
        yield put(initMyApplyPage(resp.data));
    } catch (e) {
        console.log('e', e);
    }
}

function * fetchInvitationData() {
    try {
        let resp = yield axios.get(`/invate/list`);
        resp = resp.data;
        yield put(initInvitePage(resp.data));
    } catch (e) {
        console.log('e', e);
    }
}

function * sagas() {
    yield takeEvery(constants.GET_HOME_DATA, getHomeData);
    yield takeEvery(constants.GET_PRO_LIST, fetchProList);
    yield takeEvery(constants.GET_DETAIL, fetchProDetail);
    yield takeEvery(constants.GET_ACTIVS_DATA, fetchActivityListData);
    yield takeEvery(constants.GET_PERSONAL_INFO, fetchPersonData);
    yield takeEvery(constants.GET_ACTIVITY_DETAIL, fetchActivityDetailData);
    yield takeEvery(constants.SUBMIT_APPLY, putSubmitApply);
    yield takeEvery(constants.GET_MYAPPLY_INFO, fetchApplyList);
    yield takeEvery(constants.GET_INVITE_DATA, fetchInvitationData);
}

export default sagas;
