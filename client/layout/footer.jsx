import className from  '../assets/styles/footer.styl'

export default {
    data() {
        return {
            author: 'no one'
        }
    },
    render() {
        console.log('footer: ', className)
        return(
            <div id={className.footer}>
                <span>Written by {this.author}</span>
            </div>
        )
    }
}