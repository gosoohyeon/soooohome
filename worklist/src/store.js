import Vue from 'vue';
import Vuex from 'vuex';


const store = new Vuex.Store({
    state: {
        iaKeys : [
            'lvl1',
            'lvl2',
            'lvl3',
            'lvl4',
            'description',
            'path',
            'ID',
            'released',
            'modified',
            'info',
        ],
        iaData : [{"lvl1":"신청고객등록","lvl2":"신용대출","lvl3":"","lvl4":"","description":"신청고객등록","path":"/regi/card/","ID":"PCW_RCR_RGT001","released":"","modified":"","info":"test"},{"lvl1":"","lvl2":"전세론","lvl3":"","lvl4":"","description":"","path":"","ID":"PCW_RCR_RGT002","released":"","modified":"","info":""},{"lvl1":"","lvl2":"아너스론","lvl3":"","lvl4":"","description":"","path":"","ID":"PCW_RCR_RGT003","released":"","modified":"","info":""},{"lvl1":"","lvl2":"아파트담보대출","lvl3":"","lvl4":"","description":"","path":"","ID":"PCW_RCR_RGT004","released":"","modified":"","info":""},{"lvl1":"","lvl2":"사업자신용대출","lvl3":"","lvl4":"","description":"","path":"","ID":"PCW_RCR_RGT005","released":"","modified":"","info":""},{"lvl1":"사전조회대항","lvl2":"신용대출","lvl3":"","lvl4":"","description":"사전조회대상","path":"","ID":"PCW_RCR_IQR001","released":"","modified":"","info":""},{"lvl1":"","lvl2":"전세론","lvl3":"","lvl4":"","description":"","path":"","ID":"PCW_RCR_IQR002","released":"","modified":"","info":""},{"lvl1":"","lvl2":"아너스론","lvl3":"","lvl4":"","description":"","path":"","ID":"PCW_RCR_IQR003","released":"","modified":"","info":""},{"lvl1":"","lvl2":"아파트담보대출","lvl3":"","lvl4":"","description":"","path":"","ID":"PCW_RCR_IQR004","released":"","modified":"","info":""},{"lvl1":"","lvl2":"사업자신용대출","lvl3":"","lvl4":"","description":"","path":"","ID":"PCW_RCR_IQR005","released":"","modified":"","info":""},{"lvl1":"대출신청목록","lvl2":"신용대출","lvl3":"","lvl4":"","description":"","path":"","ID":"PCW_RCR_RQL001","released":"","modified":"","info":""},{"lvl1":"","lvl2":"전세론","lvl3":"","lvl4":"","description":"","path":"","ID":"PCW_RCR_RQL002","released":"","modified":"","info":""},{"lvl1":"","lvl2":"아너스론","lvl3":"","lvl4":"","description":"","path":"","ID":"PCW_RCR_RQL003","released":"","modified":"","info":""},{"lvl1":"","lvl2":"아파트담보대출","lvl3":"","lvl4":"","description":"","path":"","ID":"PCW_RCR_RQL004","released":"","modified":"","info":""},{"lvl1":"","lvl2":"사업자신용대출","lvl3":"2depth","lvl4":"3depth","description":"사업자 신용대출에 대한 description","path":"","ID":"PCW_RCR_RQL005","released":"","modified":"","info":""}]
    },
    mutations: {
        MODI_IA(state,target){
            state.iaData = state.iaData.map((arr)=>{
                const newIA ={}
                if(arr.ID == target.ID) {
                    arr.info = target.info;
                }
                return arr
            })
        }
    },
    actions: {
        modiIA ({commit},value) {
            commit('MODI_IA',value);
        }
    }
})

export default store;