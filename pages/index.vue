<template>
  <div class="text-asd">
    HOME
    <NuxtLink to="/blog">Go To Blog</NuxtLink>
  </div>
  <div class="mt-8">
    <form
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <p class="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
        <input type="hidden" name="subject" value="Reservation Request" />
    </p>
      <p>
        <label>
          Email: <input type="text" name="email" />
        </label>
      </p>
  <p>
    <label>
      Message: <textarea name="message"></textarea>
    </label>
  </p>
  <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
</template>

<script setup>
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});
</script>