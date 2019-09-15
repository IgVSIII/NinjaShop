<template>
    <footer>
        {{ todayYear }}
    </footer>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        todayYear: function() {
            var getDate = new Date();
            return getDate.getFullYear();
        }
    }
    

}
</script>

<style scoped>

</style>