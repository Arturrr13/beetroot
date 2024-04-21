<template>
    <div class="preloader" v-if="preloader">
		<div class="container">
			<div class="wrapper">
				<div class="loader">
					<div class="dot"></div>
				</div>
				<div class="loader">
					<div class="dot"></div>
				</div>
				<div class="loader">
					<div class="dot"></div>
				</div>
				<div class="loader">
					<div class="dot"></div>
				</div>
				<div class="loader">
					<div class="dot"></div>
				</div>
				<div class="loader">
					<div class="dot"></div>
				</div>
			</div>
			<div class="text">
				Please wait
			</div>
		</div>
	</div>
</template>

<script>
export default {
    props:{
        preloader: Boolean
    }
}
</script>

<style lang="scss" scoped>
.preloader{
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	background: #131111aa;
	z-index: 200;
	display: flex;
	align-items: center;
	justify-content: center;
}
.container{
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}
.wrapper{
  position: absolute;
  top: -35px;
  transform: scale(1.5);
}
.loader{
  height: 25px;
 width: 1px;
 position: absolute;
 animation: rotate 3.5s linear infinite;
}
.loader .dot{
  top: 30px;
 height: 7px;
 width: 7px;
 background: #4bc0c0;
 border-radius: 50%;
 position: relative;
}
.text{
  position: absolute;
  bottom: -85px;
  font-size: 25px;
  font-weight: 400;
  font-family: sans-serif;
  color: #f6e54e;
}
@keyframes rotate {
  30%{
    transform: rotate(220deg);
  }
  40%{
  transform: rotate(450deg);
    opacity: 1;
 }
 75%{
  transform: rotate(720deg);
  opacity: 1;
 }
 76%{
  opacity: 0;
 }
 100%{
  opacity: 0;
  transform: rotate(0deg);
 }
}
.loader:nth-child(1){
  animation-delay: 0.15s;
}
.loader:nth-child(2){
  animation-delay: 0.3s;
}
.loader:nth-child(3){
  animation-delay: 0.45s;
}
.loader:nth-child(4){
  animation-delay: 0.6s;
}
.loader:nth-child(5){
  animation-delay: 0.75s;
}
.loader:nth-child(6){
  animation-delay: 0.9s;
}
</style>