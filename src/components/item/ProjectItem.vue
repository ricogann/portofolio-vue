<template>
    <div class="card">
        <slot name="image"></slot>
        <div class="card-body">
            <slot name="card-title"></slot>
            <slot name="card-text"></slot>
            <br>
        </div>
        <slot name="link"></slot>
    </div>
</template>

