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
    if (last==now) return 1
    return (now-last)/(Math.floor(Math.random()*(max-min+1))+min);
}
function interval(word){
    setTimeout(() => {
        word=getnowpagecounter()
        let btn=document.getElementsByClassName("btn btn-primary next-slide pr-4 pl-4")[0]
        if (btn.getAttribute('style')==''){
            btn.click()
            setTimeout(() => {
                interval(word)
            }, 2000);
        }
        else document.getElementsByClassName('btn btn-primary close-book pr-4 pl-4')[0].click();
    },getneedreadtime(word,getnowpagecounter())*1000) 
    console.log('last word: ',word)
    console.log('readword: ',getneedreadtime()-word)
    console.log('time: ',getneedreadtime(word,getnowpagecounter())*1000)
}
function main(){
    let words=init_words
    setInterval(() => {
        document.getElementsByClassName('btn btn-default continue-reading')[0].click()
        console.log('keep continue')
    },60000);
    interval(words)
    console.log('im working')
}
main()
