<template>
  <div id="weather-header">
	<header role="banner">
		<h1><span class="logo"><img src="../assets/cloud_icon.svg"></span>Tempinator 5000</h1>
	</header>
	<nav><a href="about.html">About</a></nav>
  </div>

</template>

<script>
export default {
  name: 'weather-header'
}
</script>

<style>
* {
	font-family: 'Nunito', sans-serif;
	box-sizing: border-box;
}

body {margin: 0 auto;}
h1, h2, h3, h4 {
	font-family: 'Bungee Shade', georgia;
}

header {
	margin:0;
	padding: 0;
	height: 160px;
	width: 100%;
    background-image: linear-gradient(#fff, #63F0FF);
}

header h1 {
}
.logo {
	position: relative;
	top: 40px;
}
nav{ 
	background-color: #666;
	padding: 10px;
	font-weight: bold;
}
nav a{ 
	color: #fff;
	text-decoration: none;
	 }
nav a:hover, footer a:hover { color: #63F0FF; }


</style>