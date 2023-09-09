<template>
    <div class="hello">
        <h1> {{ count }} </h1>
    </div>
</template>
<script>
export default {
    layout (contect) {
        return 'custom'
    },
    name: "Hello World",
    data() {
        queueNumber: 18;
    },
    computed: {
        count: function() {
            return 'Nomor antrianmu adalah ' + this.queueNumber
        }
    }
}
</script>