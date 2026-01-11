const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postContainer = document.querySelector(".post")

let contain = ""

for (let i = 0; i < posts.length; i++) {
    
    contain += 
     `<section class ="wrapper">
            
        <div class="profileDataPost"> 
            <img id="postProfilePic" src="${posts[i].avatar}"> 
            <div class="postUserData"> 
                <p > ${posts[i].name} </p>
                <p > ${posts[i].location}</p>
            </div>
        </div>
        
        </section>
        
        <div class="image wrapper">
            <img class="post" src="${posts[i].post}"> 
        </div>
        
        <div class = "wrapper">
            <div class ="icon-bar"> 
                <img class="icon" src = "images/icon-heart.png"">
                <img class="icon" src = "images/icon-comment.png"">
                <img class="icon" src = "images/icon-dm.png"">
            </div>
        
        <div class = "likeCommentSection">
            <p> <span> ${posts[i].likes} likes </span> </p> 
            <p> <span>${posts[i].username}</span> ${posts[i].comment} <p>
        </div>
        
        </div>`
}

console.log(contain)

postContainer.innerHTML = contain