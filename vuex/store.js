/**
 * Created by Administrator on 2017/7/14.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        message : 'this message from Store ',
        todoList: [
            {id : 1, todo : '学习VUE',done : true},
            {id : 2, todo : '学习laravel',done : false},
            {id : 3, todo : '学习webpack',done : false}
        ],
    },
    // getters 示例，这里获取todoList 的总数和 todoList 已完成的
    getters : {
        // 计算todo的总数
        todoCount : state => {
            return state.todoList.length
        },
        // 返回已完成的todo
        doneTodo : state => {
            return state.todoList.filter(todoList => todoList.done)
        }
    },
    mutations: {
        // 新增一个todo
        addTodoList (state, payload){
            console.log(state);
            state.todoList.push({id:state.todoList.length + 1,todo:payload,done:false})
        },
        // 删除一个todo
        deleteTodo(state,payload){
            state.todoList.splice(payload,1)
        },
        // 改变todo的状态
        changeStatus(state,payload){
            state.todoList[payload].done = !state.todoList[payload].done;
        }
    }

})

export default store;
