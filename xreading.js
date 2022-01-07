const min=1.6
const max=2.5
const init_words=0
//words/s
function getnowpagecounter(){
    let divs=document.getElementsByClassName("show-word-count fixed-top")[0].children[0].children
    for (var i of divs){
        if (i.className!='') return parseInt(i.getAttribute('sectioncount'))
    }
}
function getneedreadtime(last,now){
    return (now-last)/(Math.floor(Math.random()*(max-min+1))+min);
}
function interval(word){
    setTimeout(() => {
        let btn=document.getElementsByClassName("btn btn-primary next-slide pr-4 pl-4")[0].getAttribute('style')
        if (btn.getAttribute('style')==''){
            word=getnowpagecounter()-word
            setTimeout(() => {
                interval(word)
            }, 1000);
        }
    },getneedreadtime(word,getnowpagecounter())*1000)
}
function main(){
    let words=init_words
    setInterval(() => {
        document.getElementsByClassName('btn btn-default continue-reading')[0].click()
    },60000);
    interval(words)
}
main()
