<template>
<div>
  <Head>
      <Title>Auth</Title>
    </Head>
    <Auth/>
</div>
</template>

<script setup >
definePageMeta({
    middleware: ['auth']
  } )
</script>

