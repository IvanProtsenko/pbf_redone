<template>
    <div class="container">
        <div class="input-group input-group-lg" style="margin-top: 10%">
            <input :value="next" type="text" class="form-control" aria-label="Large">
        </div>
        <button v-if="next < 1836311903" type="button" @click="next_fib" class="btn btn-primary btn-lg btn-block" style="margin-top: 10%">Следующее число Фибоначчи</button>
        <button v-else type="button" disabled class="btn btn-primary btn-lg btn-block" style="margin-top: 10%">А дальше переполнение, вернитесь к началу</button>
        <button type="button" @click="to_begin" class="btn btn-primary btn-lg btn-block" style="margin-top: 10%">К началу</button>
    </div>
</template>

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>

<script>
  export default {
    data: () => ({
        next: 0
    }),
    async mounted() {
        this.next = await this.$store.dispatch('GET_FIB');
    },
    methods: {
        async next_fib() {
            if(this.next < 1836311903) {
                let result = await this.$store.dispatch('NEXT_FIB');
                this.next = result;
            }
        },
        async to_begin() {
            this.next = 0;
            await this.$store.dispatch('BEGIN_FIB');
        }
    }
  }
</script>