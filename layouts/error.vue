<template>
    <div>
        <div class="container text-center mx-auto">
            <slot name="header" />
            <slot name="detail" />
        </div>
    </div>
</template>


<style scoped>
    .container{
        text-align: center;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }

</style>