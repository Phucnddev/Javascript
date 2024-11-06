

function fetchPosts() {
    const postPromise = new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('error');
                }
                return response.json();
            })
            .then((post) => {
                const eventPosts = post.filter((item, index) => index % 2);
                resolve(eventPosts); 
            })
            .catch((e) => reject(e));
    });
    return postPromise;
}
fetchPosts().then((posts) => console.log(posts))

// fetchPosts().then((posts) => console.log(posts)).catch((error) => console.error(error));


function fetch2() {
    const postPromise = new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            if(response.status !== 200) {
                throw new Error('error');
            }
            return response.json();
        })
        .then((posts) => {
            const aAAA = posts.filter((item, index) => index % 2);
            resolve(aAAA);
        })
        .catch((e) => reject(e));
    })
    return postPromise;
}

fetch2().then((data) => console.log(data))


async function fetchPosts2() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) { // Kiểm tra nếu status không phải là 200-299
            throw new Error('Network response was not ok');
        }
        
        const posts = await response.json(); // Chuyển đổi response thành JSON
        const eventPosts = posts.filter((item, index) => index % 2); // Lọc các bài viết có index lẻ
        return eventPosts;
        
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Gọi hàm và xử lý kết quả
fetchPosts2().then(posts => {
    if (posts) console.log(posts);
});


async function fetchPost3() {
    try {
        const respon = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!respon.ok) {
            throw new Error('error');
        }
        const posts = await respon.json();
        const eventPosts = posts.filter((item, index) => index % 2);
        return eventPosts;
    } catch (error) {
         console.error('There was a problem with the fetch operation', error);   
    }   
}

fetchPost3().then(posts => {
    if(posts) console.log(posts)
})