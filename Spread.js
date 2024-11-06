function fetchPosts() {
    const possPromise = new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('error');
          }
          return response.json();
        })
        .then((posts) => {
          const evenPosts = posts.filter((item, idx) => idx % 2);
          resolve(evenPosts);
        })
        .catch((e) => reject(e));
    });
    return possPromise;
  }

  fetchPosts().then((data) => console.log(data));



  async function fetch2() {
    const respon = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(respon.status !== 200) {
        throw new Error('error')
    }
    const posts = await respon.json();

    return posts;
  }

  fetch2().then((data) => console.log(data))


  
