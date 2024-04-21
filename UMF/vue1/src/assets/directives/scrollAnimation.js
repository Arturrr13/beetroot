export default {
    mounted(){
        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('element-show');
                }
            });
        }

        let options = {threshold: [0.5] };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = document.querySelectorAll('h1, h2, .element__animation--translateY, .element__animation--translateX, img, span, p');
        
        for (let elm of elements) {
            observer.observe(elm);
        }
    }
}