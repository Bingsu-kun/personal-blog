
package com.personal.blog


import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.DeleteMapping


@RestController("/article")
class ArticleController

private ArticleService articleService

// HOW TO MAKE CONSTRUCTER??
// public funArticleContoroller( ArticleService articleService ) {
//     this.articleService = articleService
// }


@GetMapping("/")
fun getArticles() {

}
