<template>
  <div>
    <Head>
      <Title>Auth</Title>
    </Head>
    <AuthForm />
  </div>
</template>

<script setup>
definePageMeta({
    middleware: ['auth']
  } )
</script>

