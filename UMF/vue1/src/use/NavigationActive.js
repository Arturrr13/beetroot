export function useActive(rem1, rem2, rem3, rem4, add) {
    document.querySelector(rem1).classList.remove('active')
	document.querySelector(rem2).classList.remove('active')
	document.querySelector(rem3).classList.remove('active')
    document.querySelector(rem4).classList.remove('active')
    document.querySelector(add).classList.add('active')
}