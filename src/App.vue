<template>
    <div id="app">
        <img src="./assets/logo.png">
        <todo-input></todo-input>
        <todo-list></todo-list>
    </div>
</template>

<script>
    import TodoInput from './components/TodoInput'
    import TodoList from './components/TodoList'

    export default {
        name: 'app',
        components: {
            TodoInput,
            TodoList
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
