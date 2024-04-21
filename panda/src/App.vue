<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/favorites">Favorites</router-link>
  </nav>
  <router-view/>
</template>

<style>
*, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body{
  width: 100%;
  height: 100%;
  background:  #131111;
  position: relative;
}

ul {
  list-style: none;
}

a{
  text-decoration: none;
}

a:hover,
button:hover{
  cursor: pointer;
}

button,
input[type=text]{
	padding: 5px 15px;
	background: #fffb57;
	border-radius: 5px;
	border: none;
	box-shadow: 0px 0px 5px #fffb57;
	font-size: 16px;
}

nav{
  display: flex;
  gap: 20px;
  justify-content: center;
  padding-top: 25px;
}

nav a{
  color: #fffb57;
  font-size: 23px;
  transition: all .25s ease;
}

nav a:hover{
  color: rgb(75, 192, 192);
}
</style>
