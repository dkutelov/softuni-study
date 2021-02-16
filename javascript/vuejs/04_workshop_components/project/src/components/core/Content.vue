<template>
  <section class="content-info"><slot /></section>
</template>

<script>
export default {};
</script>

<style scoped>
main .content-info {
  width: 80%;
  padding: 1%;
  font-size: 18px;
  display: block;
}

main .content-info .user-form input {
  padding: 1%;
  width: 25%;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  font-family: inherit;
}

main .content-info .user-form input:focus {
  background: rgb(255, 248, 198);
}

main .content-info .user-form .form-group {
  margin-bottom: 1%;
}

main .content-info .user-form .form-group img {
  vertical-align: bottom;
}

main .content-info .user-form button {
  padding: 1%;
  background: #44a9f8;
  color: white;
  border: none;
  width: 10%;
  font-size: 16px;
  cursor: pointer;
}

main .content-info .user-links a {
  color: black;
  text-decoration: none;
  font-weight: normal;
  margin: 2%;
}

main .content-info .user-links a:hover {
  color: #44a9f8;
  text-decoration: underline;
}

main .content-info .user-links .active-route {
  color: #44a9f8;
  text-decoration: underline;
}

div.form-group {
  margin-top: 1%;
  margin-bottom: 1%;
}

div.form-group input,
option,
select {
  font-size: 18px;
  padding: 1%;
  width: 25%;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  font-family: inherit;
  text-align: center;
  text-align-last: center;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

.content-preview {
  text-align: left;
  word-wrap: break-word;
  display: block;
  width: 100%;
}
</style>
