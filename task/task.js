function createTittleArticle(article, len) {
    if (article.length<=len-2){
        return article;
    }else {
        let index
        let nameArticle = article.substr(0, len - 2);
        console.log('nameArticle', nameArticle);
        for (index=1; index<nameArticle.length;index++){
            if (nameArticle[nameArticle.length-index]===' '){
                break
            }
        }
        console.log('index', index);
        nameArticle=nameArticle.substr(0,nameArticle.length-index)+'…'
        return nameArticle;
    }

}

module.exports = createTittleArticle;