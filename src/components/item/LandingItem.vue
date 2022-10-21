<template>
  <div class="landing-page">
    <slot name="image"></slot>
    <div class="content">
        <slot name="title"></slot>
        <slot name="description"></slot>
        <slot name="button"></slot>
    </div>
  </div>
</template>