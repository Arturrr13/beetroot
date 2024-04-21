export default {
    mounted: el => {
        function loadImage(){
            el.src = el.dataset.src
        }

        function calback(entries, observer){
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    loadImage()
                    observer.unobserve(el)
                }
            });
        }

        function createIntersectionObserver(){
            const options = {
                root: null,
                threshold: 0
            }
            const observer = new IntersectionObserver(calback, options)
            observer.observe(el)
        }

        if(!window['IntersectionObserver']){
            loadImage()
        } else {
            createIntersectionObserver()
        }
    }
}