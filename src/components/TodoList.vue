<template>
    <div id="hello">
        <div>
            <div class="container">
                <div class="row">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span>共：</span>
                            <span>{{todoCount}}</span>
                            <span>个TODO</span>
                        </li>
                        <li class="list-group-item" v-for="(todo, index) in todoList"><span class="badge" v-if="todo.done == false">未完成</span>
                            {{ todo.todo}}
                            <button class="btn tbn-success btn-xs" @click="deleteTodo(index)">X</button>
                            <button class="btn tbn-success btn-xs" @click="changeStatus(index)">改变</button>
                        </li>
                    </ul>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <span>已完成：</span>
                            <span>{{todoDoneCount}}</span>
                            <span>个TODO</span>
                        </li>
                        <li class="list-group-item" v-for="(todo, index) in doneTodo"><span class="badge" v-if="todo.done == false">未完成</span>
                            {{ todo.todo}}
                            <button class="btn tbn-success btn-xs" @click="deleteTodo(index)">X</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                newTodo : '',
            }
        },
        props: ['msMsg'],
        methods : {
            deleteTodo (index){
                console.log(index)
                this.$store.commit('deleteTodo',index)
            },
            changeStatus (index){
                this.$store.commit('changeStatus',index)
            }
        },
        computed : {
            // 获取所有的todo列表
            todoList(){
                return this.$store.state.todoList
            },
            //  获取todoList的数量
            todoCount (){
                return this.$store.getters.todoCount
            },
            // 获取已经完成的todo
            doneTodo (){
                return this.$store.getters.doneTodo
            },
            // 获取已完成的数量
            todoDoneCount (){
                return this.$store.getters.doneTodo.length
            }

        }
    }
</script>

<style lang="css">

</style>
