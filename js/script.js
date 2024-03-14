const posts = [
  {
    id: "777",
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    caption: "just took a few mushrooms lol",
    likes: 21,
    comments: [
      {
        username: "gmuner",
        text: "🍄🍄🍄",
      },
      {
        username: "person200",
        text: "amazing portrait",
      },
    ],
  },
  {
    id: "245",
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    caption: "i'm feelin a bit stressed tbh",
    likes: 4,
    comments: [
      {
        username: "devaltgr",
        text: "hello!!",
      },
      {
        username: "arnold",
        text: "how are you?",
      },
    ],
  },
  {
    id: "888",
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    caption:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
    comments: [
      {
        username: "cryptobro",
        text: "let's make money oldman!",
      },
      {
        username: "bot",
        text: "do you want to b rich? follow me and check my online TOTALLY FREE master class",
      },
    ],
  },
]

const postsSectionEl = document.querySelector("#posts-section")

const testing = document.querySelector("header")

// Start app
renderPosts()

// Functions
function renderPosts() {
  postsSectionEl.innerHTML = ""
  posts.forEach((post) => {
    let postEl = document.createElement("article")
    postEl.classList.add("post")
    postEl.id = `postid-${post.id}`
    postEl.innerHTML = setPostContent(post)

    postsSectionEl.append(postEl)
  })
}

function setPostContent(post) {
  let postComments = getPostComments(post)
  let postContent = `
    <header class="post-header container">
      <img
        class="user-avatar"
        src="./assets/${post.avatar}"
        alt="${post.username} avatar picture"
      />
      <div class="post-header-text">
        <h2>${post.name}</h2>
        <p>${post.location}</p>
      </div>
    </header>

    <main class="post-body">
      <img
        class="post-img"
        src="./assets/${post.post}"
        alt="${post.username} post" ondblclick="like(${post.id})"
      />
      <div class="post-btn-container container">
        <button class="post-btn like-btn" onClick="like(${post.id})"></button>
        <button class="post-btn comment-btn"></button>
        <button class="post-btn share-btn"></button>
      </div>
      <div class="post-details-container container">
        <p class="bold">${post.likes} likes</p>
        <p>
          <span class="username bold">${post.username}</span> ${post.caption}
        </p>
      </div>
      ${postComments}
    </main>

  `
  return postContent
}

function getPostComments(post) {
  let postCommentsHTML = ""
  post.comments.forEach((comment) => {
    postCommentsHTML += `
      <article class="comment container">
        <p><span class="username bold">${comment.username}</span> ${comment.text}</p>
      </article>
    `
  })
  return postCommentsHTML
}

function like(postID) {
  posts.forEach((post) => {
    if (postID === Number(post.id)) {
      post.likes++
      return
    }
  })
  renderPosts()
}

function check(i) {
  testing.innerHTML += `<br>${i}`
}
